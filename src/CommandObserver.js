const commandObserver = (commandType, commandFn) => {
  process.stdin.on("data", (data, err) => {
    if (err) {
      console.log("Invalid input")
    }

    if (data.toString().trim().startsWith(commandType)) {
     commandFn(data)
    }
  })
}

export {commandObserver}