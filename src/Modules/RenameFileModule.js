import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {renameFileConst} from "../Variables.js";
import {getPathAndNewName} from "../Utils/GetPathAndNewName.js";
import {rename} from "fs"
import {normalize, join} from "path"
import {logCurrentDir} from "../Utils/Loggers.js";
import {addSlashToPath} from "../Utils/AddSlashToPath.js";


const renameFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) {
      MainError()
    }
    // rn
    if (typeDataCheck(data, renameFileConst)) {
      const {path, newName} = getPathAndNewName(data, renameFileConst)
      const correctPath = addSlashToPath(path)
      const newPathWithoutFileName = normalize(join(correctPath, '..'))

      rename(correctPath, join(newPathWithoutFileName, newName), (err) => {
        if (err) MainError()
        logCurrentDir()
      })
    }

  })
}

export {renameFileModule}