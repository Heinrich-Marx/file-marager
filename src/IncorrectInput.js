import {commandObserver} from "./CommandObserver.js"
import {COMMANDS} from "./Constants.js"
import {OperationFailed} from "./Error.js"

const incorrectInput = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) OperationFailed()
    const flag = COMMANDS.some((el) => el === data.toString().trim().split(" ")[0])

    if (!flag) {
      console.log("Invalid input")
    }
  })

}

export {incorrectInput}