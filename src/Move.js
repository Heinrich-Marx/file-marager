import {commandObserver} from "./CommandObserver.js"
import {MV} from "./Constants.js"
import {appendFile, createReadStream, createWriteStream, unlink} from "fs";
import {OperationFailed} from "./Error.js"
import {getCorrectName, getPathAndName} from "./CorrectName.js"
import {join, normalize} from "path";
import {rename as renameFc} from "fs"

const move = async () => {
  commandObserver(MV, (data) => {
    const {path, newName} = getPathAndName(data, MV)
    appendFile(newName, "", (err) => {
      if (err) MainError()

      const readStream = createReadStream(path)
      const writeStream = createWriteStream(newName)

      readStream
        .on("end", () => {
          unlink(path, (err) => {
            if (err) OperationFailed()
          })
        })
        .pipe(writeStream)
    })
  })
}

export {move}