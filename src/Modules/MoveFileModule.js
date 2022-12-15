import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {moveFileConst} from "../Variables.js";
import {getPathAndNewName} from "../Utils/GetPathAndNewName.js";
import {appendFile, createReadStream, createWriteStream, unlink} from "fs";
import {logCurrentDir} from "../Utils/Loggers.js";

const moveFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // mv
    if (typeDataCheck(data, moveFileConst)) {
      const {path, newName} = getPathAndNewName(data, moveFileConst)

      appendFile(newName, "", (err) => {
        if (err) MainError()

        const readStream = createReadStream(path)
        const writeStream = createWriteStream(newName)

        readStream
          .pipe(writeStream)
          .on("end", () => {
            unlink(path, (err) => {
              if (err) MainError()
               logCurrentDir()
            })
          })
      })
    }
  })
}

export {moveFileModule}