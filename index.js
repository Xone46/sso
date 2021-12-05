// initialized express--------------------------------------------------------------------
let express = require('express')
let app = express()

// Get ----------------------------------------------------------------------------------
app.get('/', (req,res) => { 
    res.send('Hello World')
})

// app.use (Example : middleware)----------------------------------------------------------

app.use((req ,res, next) => {

    //complete anther programme
    next()
})

let languages = [

    {id : 1 , name : 'PHP' , version :12313123},
    {id : 2 , name : 'JavaScript' , version :12313129},
    {id : 3 , name : 'Rupy', version :123131238},
    {id : 4 , name : 'C++' ,version :12313127},
    {id : 5 , name : 'Java', version :12313126}

];

// Solution for Body (Pour permet de destiner les info a Body)
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// Post -----------------------------------------------------------------------

app.post('/add' , (req, res) => {

    let language = {
        id : req.body.id,
        title : req.body.title,
        version : req.body.version
    };

    languages.push(language)
    res.json(languages)
})


// Put ----------------------------------------------------------------------------

app.put('/:id', (req, res) => {

    //find Object in Array
    let idFound = languages.find((item) => {
        return item.id === parseInt(req.params.id)
    })

    if(idFound) {

        let languageUpdate = {
            id : idFound.id, 
            title : req.body.title,
            version : req.body.version
        }

        let index = languages.indexOf(idFound)   
        languages.splice(index,1,languageUpdate)  
    }

   res.send(languages)
})


//PATCH (pour change un seul element) -----------------------------------
app.path('/:id', (req, res) => {

    //find Object in Array
    let idFound = languages.find((item) => {
        return item.id === parseInt(req.params.id)
    })

    if(idFound) {
        let languageUpdate = {
            id : idFound.id, 
            title : req.body.title
        }
        let index = languages.indexOf(idFound)   
        languages.splice(index,1,languageUpdate)  
    }

   res.send(languages)
})

// Delete --------------------------------------------------

app.delete('/:id', (req, res) => {

    //find Object in Array
    let idFound = languages.find((item) => {
        return item.id === parseInt(req.params.id)
    })

    if(idFound) {

        let index = languages.indexOf(idFound)   
        languages.splice(index,1)  

    }else{
        res.sendStatus(404)
    }

   res.send(languages)
})

// app.set() ------------------------------------------------------

// npm i ejs 

// let ejs = require('view engine', 'ejs')

// app.all() (Pour define Auth)-------------------------------------------
// app.all('*') -> tout les path doit auth
// app.all('/grades/*') -> tout les path predefine a 'grades' doit Auth

// pour Demarre un proprite (Enable)-----------------------------------------------
// app.enable('trust proxy')
// pour voir est ce que enable ou no : -> console.log(app.enanled('trust proxy'))

// pour Arrete un proprite (Disable)-----------------------------------------------
// app.disable('trust proxy')
// pour voir est ce que disableble ou no : -> console.log(app.disabled('trust proxy'))


// Response -----------------------------------------------------------------------
// rederict('path'), send(html or json or array) , render() avec ejs , status().end() or status.send()

// Router ----------------------------------------------------------------------------


// open port listen
app.listen(3000)