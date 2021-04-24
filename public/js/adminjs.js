function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function deleteUser(event){
  Swal.fire({
    title: '¿Estás seguro que querés eliminar este usuario?',
    text: "No podrás revertirlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, que parezca un accidente!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        {
          position: 'top-end',
          icon: 'success',
          title: 'Eliminado!',
          text: 'Fue un trabajo limpio',
          showConfirmButton: false,
          timer: 2000
      }).then(()=>{
          location.reload()
      })
    } else {
      event.preventDefault();
    }
  })
}



