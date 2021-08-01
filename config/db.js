const {createPool} = require('mysql');
const pool= createPool({
    host: 'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'richmanv2'
})

pool.getConnection(error => {
    if(error) {
        console.log({error})
    }else{
        console.log('connection')
    }
})
const executeQuery = (query, array) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, array, (err, data) => {
                if(err) {
                    console.log('Error in executing query...')
                    reject(err)
                }
                resolve(data)
            })
        }catch(err) {
            reject(err)
        }
    })
}

module.exports ={executeQuery};