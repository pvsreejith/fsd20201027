const express = require('express');
const handlebars = require('express-handlebars')

// configure the environment
const PORT = parseInt(process.argv[2]) ||  3000 

// create an instance of express
const app = express()

// configure handlebars
app.engine('hbs', 
    handlebars({ defaultLayout: 'default.hbs'})
)
app.set('view engine', 'hbs')

app.get('/', 
    (req, resp) => {
        resp.status(200)
        resp.type('text/html')
        resp.render('./index.html',
            
        )
    }
)

app.get('/roll', 
    (req, resp) => {
        resp.status(200)
        resp.type('text/html')
        resp.render('roll',
            
        )
    }
)

//start express

app.listen(PORT, () =>{
    //callback , execute after express has started
    console.info(`Application started on port ${PORT} at ${new Date()}`);
})
