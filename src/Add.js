import {commandObserver} from "./CommandObserver.js"
import {ADD} from "./Constants.js"
import {appendFile} from "fs"
import {OperationFailed} from "./Error.js"
import {getCorrectName} from "./CorrectName.js"

const add = async () => {
  commandObserver(ADD, (data) => {
    const name = getCorrectName(data, ADD)

    appendFile(name, "", (err) => {
      if (err) OperationFailed()
    })
  })
}

export {add}