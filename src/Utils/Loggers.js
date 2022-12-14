const logByeMessage = (userName) => {
  console.log(`Goodbye, ${userName}, see your again.`)
  process.exit(0)
}

const logCurrentDir = () =>  console.log(`You are currently in ${process.cwd()}`)

export {logByeMessage, logCurrentDir}