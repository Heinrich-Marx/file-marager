import {commandObserver} from "./CommandObserver.js"
import {UP, CD, LS} from "./Constants.js"
import {OperationFailed} from "./Error.js"
import {join} from "path"
import {readdir} from "fs"
import {getCorrectName} from "./CorrectName.js"

const folders = async () => {
  commandObserver(UP, () => {
    process.chdir("../")

    console.log(process.cwd())
  })

  commandObserver(CD, (data) => {
    try {
      const name = getCorrectName(data, CD)

      process.chdir(join(process.cwd(), name))
    }
    catch (err) {
      OperationFailed()
    }
  })

  commandObserver(LS, () => {
    readdir(process.cwd(), (err,files) => {
      if (err) OperationFailed()

      console.log(files)
    })
  })
}

export {folders}