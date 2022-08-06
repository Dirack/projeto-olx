import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import routes from './routes/router';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname,'../public')));

server.use(express.urlencoded({extended:true}));

server.use(routes);

server.listen(process.env.PORT,()=>{
	console.log("Server started on port",process.env.PORT);
});
