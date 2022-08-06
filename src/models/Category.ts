import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface CategoryInstance extends Model{
	id: number,
	name: string,
	slug: string
};

export const Category = sequelize.define<CategoryInstance>("category",{
	id:{
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	name:{
		type: DataTypes.STRING
	},
	slug:{
		type: DataTypes.STRING
	}},{
		tableName:"category",
		timestamps: false
});
