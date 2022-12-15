import {InputError, MainError} from "../Utils/Error.js";
import {arrWithAllConst} from "../Variables.js";
import {logCurrentDir} from "../Utils/Loggers.js";

const invalidInputModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()

    const flag = arrWithAllConst.some((el) => el  === data.toString().trim())

    if (!flag) {
      InputError()

      logCurrentDir()
    }
  })
}

export {invalidInputModule}