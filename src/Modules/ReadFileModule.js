import {MainError} from "../Utils/Error.js";
import {readFileConst} from "../Variables.js";
import {logCurrentDir} from "../Utils/Loggers.js";
import {readFile} from "fs/promises";
import {join} from "path";

const readFileModule = async () => {
  process.stdin.on("data", async (data, err) => {
    if (err) MainError(err)
    // cat
    if (data.toString().trim().startsWith(readFileConst)) {
      const fileName = data.toString().trim().replace(readFileConst, "").trim()

      const path = join(process.cwd(), fileName)

      try {
        const content = await readFile(path, {encoding: "utf-8"})

        console.log(content)

        logCurrentDir()
      }
      catch (err) {
        MainError(err)
      }
    }
  })
}

export {readFileModule}