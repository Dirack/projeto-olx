import {checkSchema} from 'express-validator';

export const AuthValidator = {
	signup: checkSchema({
		name: {
			trim: true,
			notEmpty:true,
			isLength:{
				options:{min:2}
			},
			errorMessage: "Mais de 2 caracteres no nome"
		},
		email:{
			isEmail: true,
			normalizeEmail: true,
			errorMessage: "Email inválido"
		},
		password:{
			isLength:{
				options:{min:2}
			},
			errorMessage: "Mais de 2 caracteres na senha"
		},
		state:{
			notEmpty: true,
			errorMessage: "Estado não vazio"
		}
	})
}
