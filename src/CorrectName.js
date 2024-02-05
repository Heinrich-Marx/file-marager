const getCorrectName = (str1, str2) => str1.toString().trim().replace(str2, "").trim()

const getPathAndName = (str1, str2) => {
  const pathWithName = getCorrectName(str1, str2)

  const arrWithPathAndName = pathWithName.trim().split(' ')

  const filteredArr = arrWithPathAndName.filter((el) => el.trim())

  return ({
    path: filteredArr[0].trim(),
    newName: filteredArr[1].trim()
  })
}

export {getCorrectName, getPathAndName}