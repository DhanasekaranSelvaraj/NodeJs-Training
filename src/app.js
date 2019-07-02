// import './models';
import { JsonModule } from './config/json.module';
import { User, Product } from './models';


let jsonModule = new JsonModule();
console.log(jsonModule.getName());

let user = new User();
let product = new Product();

