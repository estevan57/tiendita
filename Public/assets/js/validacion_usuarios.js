
const validacion_usuarios = ()=>{
    alert('sahj')
    
    const nombre_usuario = document.querySelector('#nombre').value
    const apellido_usuario = document.querySelector('#apellido').value
    const telefono_usuario = document.querySelector('#telefono').value
    const correo_usuario = document.querySelector('#correo').value
    const contraseñas_usuario = document.querySelector('#contraseñas').value
    if(nombre_usuario == '' || apellido_usuario == '' ||telefono_usuario == '' || correo_usuario == '' ||contraseñas_usuario==''||nombre_usuario == null || apellido_usuario == null ||telefono_usuario == null || correo_usuario == null ||contraseñas_usuario==null){
      alert('El formulario no tiene datos')
    }else{
      alert('registrado')
    document.querySelector('#nombre').value=null
    document.querySelector('#apellido').value=null
    document.querySelector('#telefono').value=null
    document.querySelector('#correo').value=null
    document.querySelector('#contraseñas').value=null
      
    }
  
  }
  const validar_usuarios = document.querySelector('#botton_usuarios')
  validar_usuarios.addEventListener('click',validacion_usuarios);