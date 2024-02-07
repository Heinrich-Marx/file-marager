import {welcomeGoodbye} from "./WelcomeGoodbye.js"
import {incorrectInput} from "./IncorrectInput.js"
import {folders} from "./Folders.js"
import {read} from "./Read.js"
import {add} from "./Add.js"
import {rename} from "./Rename.js"
import {copy} from "./Copy.js"
import {move} from "./Move.js"
import {remove} from "./Remove.js"
import {system} from "./System.js"
import {hash} from "./Hash.js"
import {compress} from "./Compress.js"
import {decompress} from "./Decompress.js"
import {EventEmitter} from "events"

const app = async () => {
 EventEmitter.defaultMaxListeners = 100;
 await welcomeGoodbye()
 await folders()
 await read()
 await add()
 await rename()
 await copy()
 await move()
 await system()
 await hash()
 await compress()
 await decompress()

 await incorrectInput()
}

await app()