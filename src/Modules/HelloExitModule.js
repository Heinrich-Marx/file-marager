import {MainError} from "../Utils/Error.js";
import {exitConst} from "../Variables.js";
import {logByeMessage, logCurrentDir} from "../Utils/Loggers.js";

const helloExitModule = async () => {
  const userName = process.argv[2].replace("--username=", "")

  console.log(`Welcome to File Manager, ${userName}.`)

  logCurrentDir()

  process.stdin.on("data", (data, err) => {
    if (err) MainError(err)

    if (data.toString().trim() === exitConst) {
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