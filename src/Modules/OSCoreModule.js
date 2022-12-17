import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {osArchConst, osCpusConst, osEolConst, osHomedirConst, osUserName} from "../Variables.js";
import {EOL, cpus, homedir, userInfo, arch} from "os"
import {logCurrentDir} from "../Utils/Loggers.js";

const osCoreModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // os EOL
    if (typeDataCheck(data, osEolConst)) {
      console.log(EOL)
      logCurrentDir()
    }
    //os cpus
    if (typeDataCheck(data, osCpusConst)) {
      console.log(cpus())
      logCurrentDir()
    }
    // os homedir
    if (typeDataCheck(data, osHomedirConst)) {
      console.log(homedir())
      logCurrentDir()
    }
    // os username
    if (typeDataCheck(data, osUserName)) {
      console.log(userInfo().username)
      logCurrentDir()
    }
    // os architecture
    if (typeDataCheck(data, osArchConst)) {
      console.log(arch())
      logCurrentDir()
    }
  })
}

export {osCoreModule}