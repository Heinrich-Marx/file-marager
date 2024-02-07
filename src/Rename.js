import {commandObserver} from "./CommandObserver.js"
import {RN} from "./Constants.js"
import {appendFile} from "fs"
import {OperationFailed} from "./Error.js"
import {getCorrectName, getPathAndName} from "./CorrectName.js"
import {join, normalize} from "path";
import {rename as renameFc} from "fs"

const rename = async () => {
  commandObserver(RN, (data) => {
    const {path, newName} = getPathAndName(data, RN)
    const correctPath = join(" ", path).trim()
    const newPathWithoutFileName = normalize(join(path, '..'))
    renameFc(path, join(newPathWithoutFileName, newName), (err) => {
      if (err) OperationFailed()
    })
  })
}

export {rename}