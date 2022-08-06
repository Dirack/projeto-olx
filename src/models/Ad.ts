import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface AdInstance extends Model{
	id: number,
	idUser: string,
	state: string,
	category: string,
	dateCreated: Date,
	title: string,
	price: number,
	priceNegotiable: boolean,
	description: string,
	views: number,
	status: string,
};

export const Ad = sequelize.define<AdInstance>("ad",{
	id:{
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	idUser:{
		type: DataTypes.STRING
	},
	state:{
		type: DataTypes.STRING
	},
	category:{
		type: DataTypes.STRING
	},
	dateCreated:{
		type: DataTypes.DATE
	},
	title:{
		type: DataTypes.STRING
	},
	price:{
		type: DataTypes.FLOAT
	},
	priceNegotiable:{
		type: DataTypes.BOOLEAN
	},
	description:{
		type: DataTypes.STRING
	},
	views:{
		type: DataTypes.INTEGER
	},
	status:{
		type: DataTypes.STRING
	}},{
		tableName: "adolx",
		timestamps: false
});
