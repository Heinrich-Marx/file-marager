import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {compressConst} from "../Variables.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib"
import {logCurrentDir} from "../Utils/Loggers.js";
import {addSlashToPath} from "../Utils/AddSlashToPath.js";


const compressModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // compress
    if (typeDataCheck(data, compressConst)) {
      const path = addSlashToPath(getCorrectName(data, compressConst))

      const readStream = createReadStream(path)

      const writeStream = createWriteStream(path.concat(".gz"))

      readStream
        .on("error", () => {
          MainError()
          readStream.destroy()
        })
        .on("end", () => {
          logCurrentDir()
        })
        .pipe(createGzip())
        .pipe(writeStream)

    }
  })
}

export {compressModule}