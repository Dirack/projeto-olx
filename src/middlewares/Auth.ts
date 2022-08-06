import {Request, Response, NextFunction} from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import {User} from '../models/User';

dotenv.config();

export const Auth = {
	private: async (req: Request, res: Response, next: NextFunction)=>{
		if(!req.query.token && !req.body.token){
			res.json({error:"Not authorized"});
			return;
		}

		let token: string = '';
		if(req.query.token) token = req.query.token as string;
		if(req.body.token) token = req.body.token;
		if(token=='') return res.json({error: "Not authorized"});

		let user = await User.findOne({where:{token}});

		if(!user) return res.json({error: "Not authorized"});
		next();
	}
}
