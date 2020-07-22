const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const port = 3000
const { Client } = require('pg');
const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "Chunn0889911029",
    port: 4000,
    database: "Store"
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// var whitelist = ['http://localhost:3000','http://localhost:3001','http://192.168.21.149:3000/']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// // Then pass them to cors:
// app.use(cors(corsOptions));
async function getProducts() {
    await client.connect()
    console.log("Connected successfully.");
    const results = await client.query("SELECT * FROM Products");
    console.table(results.rows);
    await client.end();
    console.log("Client disconnected succesfuly!");
}

client.connect(err=>{
    if(err){return err}
});


// const router = express.Router();
// router.get('/',(req,res)=>{
//     res.send('go to /products to see products')
// });
// router.get('/products', (req, res) => {
//     client.query("SELECT * FROM Products", (err, results) => {
//         if (err) {
//             return res.send(err);
//         }else{
//             return res.json(results.rows)
//         }
//     });
// });

// router.get('/image/', (req, res) => {
//     client.query("SELECT * FROM Products", (err, results) => {
//         if (err) {
//             return res.send(err);
//         }else{
//             return res.json(results.rows)
//         }
//     });
// });

var routes=require('./todoListRouters');
routes(app);


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})