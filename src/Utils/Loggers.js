const logByeMessage = (userName) => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye`)
  process.exit(0)
}

const logCurrentDir = () =>  console.log(`You are currently in ${process.cwd()}`)

const logWelcome = userName =>  console.log(`Welcome to the File Manager, ${userName}.`)

export {logByeMessage, logCurrentDir, logWelcome}