import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {compressConst} from "../Variables.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib"
import {logCurrentDir} from "../Utils/Loggers.js";


const compressModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // compress
    if (typeDataCheck(data, compressConst)) {
      const path = getCorrectName(data, compressConst)

      const readStream = createReadStream(path)

      const writeStream = createWriteStream(path.concat(".gz"))

      readStream
        .on("error", () => {
          MainError()
          readStream.destroy()
        })
        .pipe(createGzip())
        .pipe(writeStream)
        .on("end", () => {
          logCurrentDir()
        })
    }
  })
}

export {compressModule}