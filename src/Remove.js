import {commandObserver} from "./CommandObserver.js"
import {RM} from "./Constants.js"
import {unlink} from "fs";
import {OperationFailed} from "./Error.js"
import {getCorrectName} from "./CorrectName.js"

const remove = async () => {
  commandObserver(RM, (data) => {
    const path = getCorrectName(data, RM)

    unlink(path, (err) => {
      if (err) OperationFailed()
    })
  })
}

export {remove}