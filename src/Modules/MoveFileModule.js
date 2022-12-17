import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {moveFileConst} from "../Variables.js";
import {getPathAndNewName} from "../Utils/GetPathAndNewName.js";
import {appendFile, createReadStream, createWriteStream, unlink} from "fs";
import {logCurrentDir} from "../Utils/Loggers.js";
import {addSlashToPath} from "../Utils/AddSlashToPath.js";

const moveFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // mv
    if (typeDataCheck(data, moveFileConst)) {
      const {path, newName} = getPathAndNewName(data, moveFileConst)
      const correctPath = addSlashToPath(path)
      const correctNewPath = addSlashToPath(newName)
      appendFile(correctNewPath, "", (err) => {
        if (err) MainError()

        const readStream = createReadStream(correctPath)
        const writeStream = createWriteStream(correctNewPath)

        readStream
          .on("end", () => {
            unlink(correctPath, (err) => {
              if (err) MainError()
              logCurrentDir()
            })
          })
          .pipe(writeStream)
      })
    }
  })
}

export {moveFileModule}