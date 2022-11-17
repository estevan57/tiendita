const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT

// let nombre =''
// let contraseña =''

// let listar = [nombre, contraseña ]




//Motor de plantilla
        hbs.registerPartials(__dirname + '/views/partials', function (err){});
        app.set('view engine', 'hbs');
        app.set('views',__dirname + '/views');

        // Expresar el directorio público
        app.use(express.static('public'))


app.get('menu', (req, res) => {
    res.render('home'),{
        nombre:'Home'
    }

});

app.get('/usuario', (req, res) => {
    res.send('Usuario encontrado')
});


app.get('/rol.hbs', (req, res) => {
    res.render('rol',{
        nombre:'Rol'
    })

});  
app.get('/home', (req, res) => {
    res.render('home',{
        nombre:'home'
    })

}); 
app.get('/', (req, res) => {
    //res.send('Página de inicio')
    res.render('login',{
        nombre:'Login'
    })
});

/* app.get('/login', (req, res) => {
    res.sendFile(__dirname +'/public/views/login.hbs')
});
  */




app.get('*', (req, res)=>{
   // res.send('Pagina no encontrada')
    // res.sendFile(__dirname + '/public/views/404.html')
    res.render('partials/footer',{
    nombre:'Página no encontrada'
})
})

//Verificar si el puerto está escuchando

app.listen(port,()=>{
    console.log(`escuchando al puert ${port}`)
}) 


