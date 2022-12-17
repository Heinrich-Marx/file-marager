import {join} from "path";

const addSlashToPath = (path) => {
  return join(" ", path).trim()
}

export {addSlashToPath}