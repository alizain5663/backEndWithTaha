const dotenv= require('dotenv');
let myEnv = {};
if(process.env.NODE_ENV === 'testing'){
    MyEnv = dotenv.config({path:`${__dirname}/../testing.env`});
}


