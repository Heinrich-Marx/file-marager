import {helloExitModule} from "./Modules/HelloExitModule.js";
import {workWithFolderModule} from "./Modules/WorkWithFolderModule.js";
import {readFileModule} from "./Modules/ReadFileModule.js";
import {createNewFileModule} from "./Modules/CreateNewFileModule.js";
import {renameFileModule} from "./Modules/RenameFileModule.js";
import {copyFileModule} from "./Modules/CopyFileModule.js";
import {moveFileModule} from "./Modules/MoveFileModule.js";
import {deleteFileModule} from "./Modules/DeleteFileModule.js";
import {invalidInputModule} from "./Modules/InvalidInputModule.js";

const mainFn = async () => {
  await helloExitModule()
  await workWithFolderModule()
  await readFileModule()
  await createNewFileModule()
  await renameFileModule()
  await copyFileModule()
  await moveFileModule()
  await deleteFileModule()
  await invalidInputModule()
}

await mainFn()

