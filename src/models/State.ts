import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface StateInstance extends Model{
	id: number,
	name: string
};

export const State = sequelize.define<StateInstance>("state",{
	id:{
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	name:{
		type: DataTypes.STRING
	}},{
		tableName: "statesolx",
		timestamps: false	
});
