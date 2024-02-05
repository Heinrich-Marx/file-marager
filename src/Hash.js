import {commandObserver} from "./CommandObserver.js"
import {HASH} from "./Constants.js"
import {OperationFailed} from "./Error.js"
import {getCorrectName} from "./CorrectName.js"
import {createHash} from "crypto"
import {createReadStream} from "fs";

const hash = async () => {
  commandObserver(HASH, (data) => {
    const name = getCorrectName(data, HASH)

    const readStream = createReadStream(name)
    console.log(name)
    readStream
      .on("data", (chunk) => {
        console.log(createHash("sha256").update(chunk.toString()).digest("hex"))
      })
      .on("error", () => {
        OperationFailed()
      })
  })
}

export {hash}