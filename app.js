const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const getErrorPage = require('./controllers/error')
const app = express();

// app.engine('handlebars', expressHbs({
//     layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'
// }))
//  // using handlebars as a templating engine
// app.set('view engine', 'pug'); //allows you set something globally on your express js application
// //pug is a templating engine
app.set('view engine', 'ejs') //setting the templating engine //ejs does not support layout as in the other two but you can use partials(you have code blocks you reuse in your templates)
app.set('views', 'views')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(getErrorPage.getErrorPage);

app.listen(3000);
