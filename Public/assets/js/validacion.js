const validacion=() =>{
    let Rol = document.querySelector('#rol')
    let Permiso = document.querySelector('#permiso')
   let Estado = document.querySelector('#estado')


   if (Rol.value==''|| Permiso.value=='' || Estado.value==''   ) {
    alert('El formulario no tiene datos')
   }

 
 if (Permiso.value=='' ) {
    alert('El campo permiso es obligatorio')
  }
  if (Estado.value=='' ) {
    alert('El campo estado es obligatorio')
  }

  if (Rol.value=='' ) {
    alert('El campo Rol es obligatorio')
  }
}

const bottoncalcular = document.querySelector('#enviar')
    bottoncalcular.addEventListener('click', validacion)