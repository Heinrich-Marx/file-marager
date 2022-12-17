import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {decompressConst} from "../Variables.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {createReadStream, createWriteStream} from "fs";
import {createUnzip} from "zlib";
import {logCurrentDir} from "../Utils/Loggers.js";
import {addSlashToPath} from "../Utils/AddSlashToPath.js";

const decompressModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // decompress
    if (typeDataCheck(data, decompressConst)) {
      const path = addSlashToPath(getCorrectName(data, decompressConst))

      const readStream = createReadStream(path)
      const writeStream = createWriteStream(path.slice(0, -3))

      readStream
        .on("error", () => {
          MainError()
        })
        .on("end", () => {
          logCurrentDir()
        })
        .pipe(createUnzip())
        .pipe(writeStream)
    }
  })
}

export {decompressModule}