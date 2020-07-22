const { Client } = require('pg');
const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "Chunn0889911029",
    port: 4000,
    database: "Store"
})
client.connect(err => {
    if (err) { return err }
});


function getProducts() {
    const results = client.query("SELECT * FROM Products");
    return results;
}
var products = getProducts();
console.log(products)

exports.list_all_products = function (req, res) {
    client.query('SELECT * FROM PRODUCTS', function (err, results) {
        if (err)
            res.send(err);
        res.json(results.rows)
    });
}

exports.make_sell = function (req, res) {
    res.type('json');
    var price = req.body.price;
    var products = req.body.products;
    console.log(products);
    if (price === null && price === 0) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    var flag = false;
    client.query(`INSERT INTO public.sales(id, price, date)VALUES (default,${price},NOW());`, function (err, results) {
        try {
            if (err) throw err;
            console.log('Rows affected:', results.rowCount);
            // return res.json({
            //     success: true,
            // });
            flag = true;
        }
        catch (err) {
            console.log(1 + err);
            // return res.json({
            //     success: false,
            //     error: 'INVALID INPUTS'
            // });
            flag = false;
        }
    });
        client.query('select id from Sales order by date desc limit 1')
            .then(data => {
                var a = data.rows[0].id;
                console.log(a)
                return products.forEach(product => {
                    console.log(product)
                    client.query(`INSERT INTO public.productsales(id,saleid,productid,quantity)VALUES (default,${data.rows[0].id},${product.product.id},${product.quantity});`, function (err, results) {
                        try {
                            if (err) throw err;
                            console.log('Rows affected:', results.rowCount);
                            flag = true;
                        }
                        catch (err) {
                            console.log(2 + err);
                            flag = false;
                        }
                    });
                });

            })
            .catch(e => console.error(3 + e.stack))
            .finally(() => {
                if (flag === true) {
                    return res.json({
                        success: true,
                    });
                } else return res.json({
                    success: false,
                    error: 'INVALID INPUTS',
                });
            })
    

}

