import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {copyFileConst} from "../Variables.js";
import {getPathAndNewName} from "../Utils/GetPathAndNewName.js";
import {appendFile, createReadStream, createWriteStream} from "fs";
import {logCurrentDir} from "../Utils/Loggers.js";

const copyFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // cp
    if (typeDataCheck(data, copyFileConst)) {
      const {path, newName: newPath} = getPathAndNewName(data, copyFileConst)

      appendFile(newPath, "", (err) => {
        if (err) MainError()

        const readStream = createReadStream(path)
        const writeStream = createWriteStream(newPath)

        readStream
          .pipe(writeStream)
          .on("end", () => {
            logCurrentDir()
          })
      })
    }
  })
}

export {copyFileModule}