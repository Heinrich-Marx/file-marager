import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {deleteFileConst} from "../Variables.js";
import {unlink} from "fs";
import {logCurrentDir} from "../Utils/Loggers.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {addSlashToPath} from "../Utils/AddSlashToPath.js";

const deleteFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // rm
    if (typeDataCheck(data, deleteFileConst)) {
      const path = addSlashToPath(getCorrectName(data, deleteFileConst))

      unlink(path, (err) => {
        if (err) MainError()
         logCurrentDir()
      })
    }
  })
}

export {deleteFileModule}