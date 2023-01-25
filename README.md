## back-end creating

1. Create github clean project & clone to your pc
2. Initialize your backend in root folder of your project by default --- npm
   init -y
3. repository, keywords, author, licence, bugs, homepage - we may delete these
   fields in learning rep
4. Add script --- "server": "nodemon server.js" --- for starting backend &
   create server.js
5. Install main dependencies for backend in root of your project folder by ---
   npm i express cors dotenv --- & --- npm i nodemon -D ---
6. Add simplest express backend server by ---

---

const express = require('express'); const cors = require('cors'); const dotenv =
require('dotenv');

const app = express(); dotenv.config();

app.use(cors()); app.use(express.json());

app.get('/', (\_, res) => { res.send('API is running......'); });

const PORT = process.env.PORT || 5000; app.listen(PORT,
console.log(`Server started on port ${PORT}`));

---

7.  (Only for testing without real DB & simplest request from HTML)

    a) Create simplest local proj db by """data/products.js""" consisting

    const products = [ { id: 'khsfdhf', name: 'Iphone 5', price: 1000 }, { id:
    'sdf7sdf', name: 'LG 4ty', price: 500 }, ]; module.exports = products;

    b) in our server.js file. Import this db by

    const products = require('./data/products'); then make simplest root for
    giving that data by app.get('/products', (req, res) => { res.json(products);
    }); After adding our change file server.js will be

---

const express = require('express'); const cors = require('cors'); const dotenv =
require('dotenv'); const products = require('./data/products');

const app = express(); dotenv.config();

app.use(cors()); app.use(express.json());

app.get('/', (\_, res) => { res.send('API is running......'); });
app.get('/products', (req, res) => { res.json(products); });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

---

    c) in html create script for getting data

---

<script>
      const productsRequest = fetch('http://localhost:5555/products');

      productsRequest
         .then(response => {
          if (!response.ok) {
               throw new Error('Request error');
            }
             return response.json();
         })
         .then(result => console.log(result))
         .catch(error => console.log(error));
</script>

---

8.  Create -- routes -- folder in our proj for separating routes from main
    server.js

                a) Create file routes/products.js for making routes for products endpoint

                b) In routes/products.js create list of products routes by Router() from
                express

                ***

                const express = require('express'); const router = express.Router();

                ***

                and import data/products.js by

                ***

                const products = require('../data/products');

                ***

                c) Move products route from server.js to routes/products.js

                - from server.js

                ***

                const products = require('./data/products');

                app.get('/products', (req, res) => { res.json(products); });

                ***

                - to routes/products.js (look at moving root from server.js to
                  routes/products.js, means we don't need in routes/products.js write the
                  same router.get('/products', ...), will be enough to live router.get('/',
                  ...))

---

const express = require('express'); const router = express.Router(); const
products = require('../data/products');

router.get('/', (req, res) => { res.json(products); });

module.exports = router;

---

                d) In future we will have more routes, so we should group them in some kind
                of routes/index.js where we reexport products f.e.

                ***

                const products = require('./products');

                module.exports = { products, };

                ***

                e) We need to import routes in server.js

                ***

                const routes = require('./routes');

                ***

                and use them in server.js by middleware like

                ***

                app.use('/products', routes.products);

                ***

                f) sometimes we should change api for new clients, but for old clients we
                have to live old api, so write in server.js such changes like
                app.use('/api/v1/products', routes.products);

                g) To sum up out server.js will be

---

const express = require('express'); const cors = require('cors'); const dotenv =
require('dotenv'); const routes = require('./routes');

const app = express(); dotenv.config();

app.use(cors()); app.use(express.json());
app.use('/api/v1/products',routes.products);

app.get('/', (\_, res) => { res.send('API is running......'); });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

---

                h) Create one more route according a) - g) with empty data f.e.

                - routes/customers.js
                ---
                 const express = require('express'); const router = express.Router();
                 router.get('/', (req, res) => {res.json({status: "success", code: 200, data: {   result: [] }}); }); module.exports = router;
                ---

                - server.js
                ---
                app.use('/api/v1/customers', routes.customers);
                ---
