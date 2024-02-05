import {commandObserver} from "./CommandObserver.js"
import {CP} from "./Constants.js"
import {appendFile, createReadStream, createWriteStream} from "fs";
import {OperationFailed} from "./Error.js"
import {getCorrectName, getPathAndName} from "./CorrectName.js"
import {join, normalize} from "path";
import {rename as renameFc} from "fs"

const copy = async () => {
  commandObserver(CP, (data) => {
    const {path, newName: newPath} = getPathAndName(data, CP)

    appendFile(newPath, "", (err) => {
      if (err) OperationFailed()

      const readStream = createReadStream(path)
      const writeStream = createWriteStream(newPath)

      readStream
        .pipe(writeStream)
    })
  })
}

export {copy}