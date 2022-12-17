import {MainError} from "../Utils/Error.js";
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {hashConst} from "../Variables.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";
import {createReadStream} from "fs";
import {logCurrentDir} from "../Utils/Loggers.js";
import {createHash} from "crypto"
import {addSlashToPath} from "../Utils/AddSlashToPath.js";

const hashModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // hash
    if (typeDataCheck(data, hashConst)) {
      const path = addSlashToPath(getCorrectName(data, hashConst))

      const readStream = createReadStream(path)

      readStream
        .on("data", (chunk) => {
          console.log(createHash("sha256").update(chunk.toString()).digest("hex"))
        })
        .on("error", () => {
          MainError()
        })
        .on("end", () => {
          logCurrentDir()
        })
    }
  })
}

export {hashModule}