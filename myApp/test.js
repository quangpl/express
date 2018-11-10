
const mysql=require('mysql');
const option={
    user:'root',
    password:'',
    database:'nodejs'
}

const connection=mysql.createConnection(option);
connection.connect(err=>{
    if(err) {
        console.log('LOi');
console.log(err)
    }
    else console.log('OK')
})
