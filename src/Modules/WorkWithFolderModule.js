import {readdir} from "fs"
import {join} from "path"
import {MainError} from "../Utils/Error.js";
import {cdConst, lsConst, upConstOne, upConstTwo} from "../Variables.js";
import {logCurrentDir} from "../Utils/Loggers.js";

const workWithFolderModule = async () => {

  process.stdin.on("data", (data, err) => {
    if (err) MainError(err)
    // up
    if (data.toString().trim() === upConstOne || data.toString().trim() === upConstTwo) {
      process.chdir("../")

      logCurrentDir()
    }
    // ls
    if (data.toString().trim() === lsConst) {
      readdir(process.cwd(), (err,files) => {
        if (err) MainError(err)

        console.log(files)

        logCurrentDir()
      })
    }
    // cd
    if (data.toString().trim().startsWith(cdConst)) {
      const folderName = data.toString().trim().replace(cdConst, "").trim()

      process.chdir(join(process.cwd(), folderName))

      logCurrentDir()
    }

  })
}

export {workWithFolderModule}