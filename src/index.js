import {helloExitModule} from "./Modules/HelloExitModule.js";
import {workWithFolderModule} from "./Modules/WorkWithFolderModule.js";
import {readFileModule} from "./Modules/ReadFileModule.js";

const mainFn = async () => {
  await helloExitModule()
  await workWithFolderModule()
  await readFileModule()
}

await mainFn()

