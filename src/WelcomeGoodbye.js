import {commandObserver} from "./CommandObserver.js"
import {EXIT} from "./Constants.js"
const USERNAME = process.argv.find((it) => it?.startsWith("--"))?.split("=")?.[1]

const DIR = process.cwd()

const goobdyeFn = () => {
  console.log(`Thank you for using File Manager, ${USERNAME}, goodbye!`)

  process.exit(0)
}

const welcomeGoodbye = async () => {
  console.log(`Welcome to the File Manager, ${USERNAME}`)
  console.log(`You are currently in ${DIR.split("/").slice(1).join("_")}`)

  await commandObserver(EXIT, goobdyeFn)

  process.on("SIGINT", goobdyeFn)
}

export {welcomeGoodbye}