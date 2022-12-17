import {MainError} from "../Utils/Error.js";
import {exitConst} from "../Variables.js";
import {logByeMessage, logCurrentDir, logWelcome} from "../Utils/Loggers.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";

const helloExitModule = async () => {
  const userName = process.argv[2].replace("--username=", "")

  logWelcome(userName)

  logCurrentDir()

  process.stdin.on("data", (data, err) => {
    if (err) MainError()

    if (typeDataCheck(data, exitConst)) {
      process.stdin.end(() => {
        logByeMessage(userName)
      })
    }
  })

  process.on("SIGINT", () => {
    console.log("\n")
    logByeMessage(userName)
  })
}

export {helloExitModule}