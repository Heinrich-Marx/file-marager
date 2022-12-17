import {MainError} from "../Utils/Error.js";
import {createFileConst} from "../Variables.js";
import {appendFile} from "fs"
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {logCurrentDir} from "../Utils/Loggers.js";

const createNewFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // add
    if (typeDataCheck(data,createFileConst)) {
      const fileName = getCorrectName(data, createFileConst)

      appendFile(fileName, "", (err) => {
        if (err) MainError()
        logCurrentDir()
      })
    }
  })
}

export {createNewFileModule}