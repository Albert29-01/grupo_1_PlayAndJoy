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

/*document.getElementById('deleteUser').addEventListener('click', function(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro que querés eliminar este usuario??',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, DALE!',
    cancelButtonText: 'Noooo, cancelar! cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
})*/



