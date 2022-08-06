import {Request, Response} from 'express';
import {validationResult,matchedData} from 'express-validator';

export const signup = (req: Request, res: Response)=>{
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.json({errors:errors.mapped()});
	}
	const data = matchedData(req);
	return res.json({tudoCerto:true, data});
}
