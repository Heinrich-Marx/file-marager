import {commandObserver} from "./CommandObserver.js"
import {CAT} from "./Constants.js"
import {createReadStream} from "fs"
import {OperationFailed} from "./Error.js"
import {getCorrectName} from "./CorrectName.js"

const read = async () => {
  commandObserver(CAT, (data) => {
    const name = getCorrectName(data, CAT)
    const readStream = createReadStream(name)

    readStream
      .on("data", (chunk) => {
        console.log(chunk.toString())
      })
      .on("error", () => {
        OperationFailed()
      })
  })
}

export {read}