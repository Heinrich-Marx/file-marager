import {readdir} from "fs"
import {join} from "path"
import {MainError} from "../Utils/Error.js";
import {cdConst, lsConst, upConstOne, upConstTwo} from "../Variables.js";
import {logCurrentDir} from "../Utils/Loggers.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";

const workWithFolderModule = async () => {

  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // up
    if (typeDataCheck(data, upConstOne) || typeDataCheck(data, upConstTwo)) {
      process.chdir("../")

      logCurrentDir()
    }
    // ls
    if (typeDataCheck(data, lsConst)) {
      readdir(process.cwd(), (err,files) => {
        if (err) MainError()

        console.log(files)

        logCurrentDir()
      })
    }
    // cd
    if (typeDataCheck(data, cdConst)) {
      const folderName = getCorrectName(data, cdConst)

      try {
        process.chdir(join(process.cwd(), folderName))
      }
      catch (err) {
        MainError()
      }

      logCurrentDir()
    }

  })
}

export {workWithFolderModule}