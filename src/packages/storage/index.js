import {setStorage} from "./storage";
import * as todos from "./adapters/todos";

setStorage(localStorage);

export {
  todos
}

