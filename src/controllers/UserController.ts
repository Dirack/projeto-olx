import {Request,Response} from 'express';
import {State} from '../models/State';

export const getStates = async (req: Request, res: Response)=>{
	let states = await State.findAll();
	res.json({states});
}
