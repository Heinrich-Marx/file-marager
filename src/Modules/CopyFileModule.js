import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {copyFileConst} from "../Variables.js";
import {getPathAndNewName} from "../Utils/GetPathAndNewName.js";
import {appendFile, createReadStream, createWriteStream} from "fs";
import {logCurrentDir} from "../Utils/Loggers.js";
import {addSlashToPath} from "../Utils/AddSlashToPath.js";

const copyFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // cp
    if (typeDataCheck(data, copyFileConst)) {
      const {path, newName: newPath} = getPathAndNewName(data, copyFileConst)

      appendFile(addSlashToPath(newPath), "", (err) => {
        if (err) MainError()

        const readStream = createReadStream(addSlashToPath(path))
        const writeStream = createWriteStream(addSlashToPath(newPath))

        readStream
          .on("end", () => {
            logCurrentDir()
          })
          .pipe(writeStream)
      })
    }
  })
}

export {copyFileModule}