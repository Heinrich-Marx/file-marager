import {commandObserver} from "./CommandObserver.js"
import {COMPRESS} from "./Constants.js"
import {OperationFailed} from "./Error.js"
import {getCorrectName} from "./CorrectName.js"
import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib"

const compress = async () => {
  commandObserver(COMPRESS, (data) => {
    const path = getCorrectName(data, COMPRESS)

    const readStream = createReadStream(path)

    const writeStream = createWriteStream(path.concat(".gz"))

    readStream
      .on("error", () => {
        OperationFailed()
        readStream.destroy()
      })
      .pipe(createGzip())
      .pipe(writeStream)
  })
}

export {compress}