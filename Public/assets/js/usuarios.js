

     const numeros = [
        {
            nombre: "dylan",
            contraseña: 5
        },
        {
            nombre:"german",
            contraseña: 34
        },
        {
            nombre:"juan",
            contraseña:17
        },
        {
            nombre:"",
            contraseña:92148
        }
    ]
    
    function login(){
        var user, password;
        user=document.getElementById("usuario").value
        password=document.getElementById("contraseña").value
    
        const arra = [
            {
                nombre: user,
                constrseña: parseInt(password)
            }
        ]
        let e = numeros.length
         for(i=0;i<e;i++){ 
            if(arra[0].nombre == numeros[i].nombre && arra[0].constrseña == numeros[i].contraseña){
                window.location='http://localhost:5755/home';
                console.log("hola")
            }else{
                if(i==4){
                   alert('No se pude acceder')
                }
                   
                
            }
            
         }
           
        
            
    } 