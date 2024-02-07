import {commandObserver} from "./CommandObserver.js"
import {DECOMPRESS} from "./Constants.js"
import {OperationFailed} from "./Error.js"
import {getCorrectName} from "./CorrectName.js"
import {createReadStream, createWriteStream} from "fs";
import {createUnzip} from "zlib";

const decompress = async () => {
  commandObserver(DECOMPRESS, (data) => {
    const path = getCorrectName(data, DECOMPRESS)

    const readStream = createReadStream(path)
    const writeStream = createWriteStream(path.slice(0, -3))

    readStream
      .on("error", () => {
        OperationFailed()
      })
      .pipe(createUnzip())
      .pipe(writeStream)
  })
}

export {decompress}