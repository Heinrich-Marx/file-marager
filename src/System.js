import {commandObserver} from "./CommandObserver.js"
import {OS_EOL, OS_CPUS, OS_HOMEDIR, OS_ARCHITECTURE, OS_USERNAME} from "./Constants.js"
import {OperationFailed} from "./Error.js"
import {EOL, cpus, homedir, userInfo, arch} from "os"

const system = async () => {
  commandObserver(OS_EOL, (data) => {
    console.log(EOL)
  })

  commandObserver(OS_CPUS, (data) => {
    console.log(cpus())
  })

  commandObserver(OS_HOMEDIR, (data) => {
    console.log(homedir())
  })

  commandObserver(OS_USERNAME, (data) => {
    console.log(userInfo().username)
  })

  commandObserver(OS_ARCHITECTURE, (data) => {
    console.log(arch())
  })
}

export {system}