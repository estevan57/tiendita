
const validacion_ventas = ()=>{
  
  const productos_venta = document.querySelector('#nombre_producto').value
  const cantidad_productos_venta = document.querySelector('#Cantidad').value
  console.log(productos_venta)
  if(productos_venta == '' || cantidad_productos_venta == '' || productos_venta == null || cantidad_productos_venta == null){
    alert('El formulario no tiene datos')
  }else{
    alert('registrado')
    document.querySelector('#nombre_producto').value=null
    document.querySelector('#Cantidad').value=''
    
  }

}
const validar_ventas = document.querySelector('#botton_ventas')
validar_ventas.addEventListener('click',validacion_ventas);


/*
  if (Rol.value == '' || Permiso.value == '' || Estado.value == '') {
    alert('El formulario no tiene datos')
  }


  if (Permiso.value == '') {
    alert('El campo permiso es obligatorio')
  }
  if (Estado.value == '') {
    alert('El campo estado es obligatorio')
  }

  if (Rol.value == '') {
    alert('El campo Rol es obligatorio')
  }

/*
const bottoncalcular = document.querySelector('#enviar')
bottoncalcular.addEventListener('click', validacion)

const usuarios =() => {
  const usuario = document.querySelector('#usuarios')
  const contraseña = document.querySelector('#contraseñas')

  if (usuario.value == "" || contraseña.value == ""){
      alert("No puedes dejar ningún campo vacío")

  } else{
      alert("Te has registrado correctamente")
      usuario.value = ""
      contraseña.value =""
  }
  }
  const bottoncalculara = document.querySelector('#calculo')
      bottoncalcular.addEventListener('click', usuarios)
   */