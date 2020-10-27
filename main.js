const express = require('express');
const handlebars = require('express-handlebars')

// configure the environment
const PORT = parseInt(process.argv[2]) || 3000

// create an instance of express
const app = express()

// configure handlebars
app.engine('hbs',
    handlebars({ defaultLayout: 'default.hbs' })
)
app.set('view engine', 'hbs')


app.get('/',
    (req, resp) => {
        resp.status(200)
        resp.type('text/html')
        resp.render('index')
    }
)


var dice1;
var dice2;
app.get('/roll',
    (req, resp) => {
        resp.status(200)
        resp.type('text/html')
        resp.render('roll',
            {
                dice1: (Math.floor(Math.random() * 6) + 1),
                dice2: (Math.floor(Math.random() * 6) + 1)

            }

        )
    }
)

// configure the application
app.use(
    express.static(__dirname + '/static')
)

app.use(
    (req, resp) => {
        resp.status(404)
        resp.type('text/html')
        resp.sendFile(__dirname + '/static/404.html')
    }
)

//start express

app.listen(PORT, () => {
    //callback , execute after express has started
    console.info(`Application started on port ${PORT}`);
})
