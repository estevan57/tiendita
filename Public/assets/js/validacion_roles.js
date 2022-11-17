
const validacion_roles = ()=>{
  
    const rol = document.querySelector('#rol').value
    const permiso_rol = document.querySelector('#permiso_rol').value
    const estado_rol = document.querySelector('#estado_rol').value
    if (rol == '' || permiso_rol == '' || estado_rol == '' || rol == null || permiso_rol == null || estado_rol == null) {
        alert('El formulario no tiene datos')
      }else{
      alert('registrado')
      document.querySelector('#rol').value=null
      document.querySelector('#permiso_rol').value=null
      document.querySelector('#estado_rol').value=null

    }
  
  }
  const validar_rol = document.querySelector('#botton_roles')
  validar_rol.addEventListener('click',validacion_roles);
  
  