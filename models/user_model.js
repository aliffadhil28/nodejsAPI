import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    id: {type: DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey: true},
    name: DataTypes.STRING,
    member: DataTypes.STRING,
    gender: DataTypes.STRING, 
},{
    freezeTableName:true,
});

export default User;

(async()=>{
    await db.sync();
});