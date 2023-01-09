import { Sequelize } from "sequelize";

const db = new Sequelize('restful-api','root','',{
    host : 'localhost',
    dialect : 'mysql',
});

export default db;