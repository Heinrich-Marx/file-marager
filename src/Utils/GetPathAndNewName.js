const getPathAndNewName = (data, str) => {
  const pathWithName = data.toString().trim().replace(str, "").trim()

  const arrWithPathAndName = pathWithName.trim().split(' ')

  const filteredArr = arrWithPathAndName.filter((el) => el.trim())

  return ({
    path: filteredArr[0].trim(),
    newName: filteredArr[1].trim()
  })
}

export {getPathAndNewName}