import {Router,Request,Response} from 'express';
import * as UserController from '../controllers/UserController';
import {Auth} from '../middlewares/Auth';
import {AuthValidator} from '../validators/AuthValidator';
import * as AuthController from '../controllers/AuthController';

const router = Router();

router.get('/ping',(req: Request, res: Response)=>{
	res.status(200).json({pong:true});
});

router.get('/states',Auth.private,UserController.getStates);
router.post('/user/signup',AuthValidator.signup,AuthController.signup);

export default router;
