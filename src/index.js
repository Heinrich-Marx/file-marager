import {helloExitModule} from "./Modules/HelloExitModule.js";
import {workWithFolderModule} from "./Modules/WorkWithFolderModule.js";
import {readFileModule} from "./Modules/ReadFileModule.js";
import {createNewFileModule} from "./Modules/CreateNewFileModule.js";
import {renameFileModule} from "./Modules/RenameFileModule.js";
import {copyFileModule} from "./Modules/CopyFileModule.js";
import {moveFileModule} from "./Modules/MoveFileModule.js";
import {deleteFileModule} from "./Modules/DeleteFileModule.js";
import {invalidInputModule} from "./Modules/InvalidInputModule.js";
import {osCoreModule} from "./Modules/OSCoreModule.js";
import {hashModule} from "./Modules/HashModule.js";
import {EventEmitter} from "events"
import {compressModule} from "./Modules/CompressModule.js";
import {decompressModule} from "./Modules/DecompressModule.js";

const mainFn = async () => {
  EventEmitter.defaultMaxListeners = 100;
  await helloExitModule()
  await workWithFolderModule()
  await readFileModule()
  await createNewFileModule()
  await renameFileModule()
  await copyFileModule()
  await moveFileModule()
  await deleteFileModule()
  await osCoreModule()
  await hashModule()
  await compressModule()
  await decompressModule()
  await invalidInputModule()
}

await mainFn()

