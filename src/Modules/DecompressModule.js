import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {decompressConst} from "../Variables.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {createReadStream, createWriteStream} from "fs";
import {createUnzip} from "zlib";
import {logCurrentDir} from "../Utils/Loggers.js";

const decompressModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // compress
    if (typeDataCheck(data, decompressConst)) {
      const path = getCorrectName(data, decompressConst)

      const readStream = createReadStream(path)
      const writeStream = createWriteStream(path.slice(0, -3))

      readStream
        .on("error", () => {
          MainError()
        })
        .pipe(createUnzip())
        .pipe(writeStream)
        .on("end", () => {
          logCurrentDir()
        })
    }
  })
}

export {decompressModule}