import {MainError} from "./Utils/Error.js";
import {exitConst} from "./Variables.js";
import {logByeMessage} from "./Utils/StdHelpers.js";

const mainFn = async () => {
  const userName = process.argv[2]

  console.log(`Welcome to File Manager, ${userName}.`)

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

await mainFn()

