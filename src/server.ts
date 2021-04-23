import express, { response } from 'express';
import "./database";
import {routes} from "./routes";


const app = express();


app.use(express.json());

app.use(routes)

app.listen(90,()=> console.log('sever is running on port 90'));


 
