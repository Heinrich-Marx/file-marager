import {MainError} from "../Utils/Error.js";
import {readFileConst} from "../Variables.js";
import {logCurrentDir} from "../Utils/Loggers.js";
import {createReadStream} from "fs"
import {typeDataCheck} from "../Utils/TypeDataCheck.js";
import {getCorrectName} from "../Utils/GetCorrectName.js";

const readFileModule = async () => {
  process.stdin.on("data", (data, err) => {
    if (err) MainError()
    // cat
    if (typeDataCheck(data, readFileConst)) {
      const path =  getCorrectName(data, readFileConst)

      const readStream = createReadStream(path)
      console.log('path', path)
      readStream
        .on("data", (chunk) => {
          console.log(chunk.toString())
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

export {readFileModule}