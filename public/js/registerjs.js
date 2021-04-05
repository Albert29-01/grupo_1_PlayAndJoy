var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre&orden=nombre", requestOptions)
.then(response => response.json())
.then(function (result){
    console.log(result.provincias.length);
    for (let i = 0; i < result.provincias.length; i++) {
        document.querySelector('select.provincia').innerHTML +='<option value='+result.provincias[i].id+'>'+result.provincias[i].nombre+'</option>' 
    }
})
.catch(error => console.log('error', error));

function selectProvincia(event){
    document.querySelector('select.localidad').disabled = true
    document.querySelector('select.localidad').innerHTML = '<option value="none" selected disabled hidden> Selecciona un localidad </option>'
    let provinciaID = document.getElementById('provincia').value
    console.log('ID Provincia',provinciaID)    
    fetch("https://apis.datos.gob.ar/georef/api/localidades?provincia="+provinciaID+"&orden=nombre&campos=id&max=1000", requestOptions)
    .then(response2 => response2.json())
    .then(function(data){
        document.querySelector('select.localidad').disabled = false
        for (let i = 0; i < data.localidades.length; i++) {
            document.querySelector('select.localidad').innerHTML += '<option value='+data.localidades[i].id+'>'+capitalize(data.localidades[i].nombre)+'</option>' 
        }
        console.log('Data Localidades',data)
    })
    .catch(error => console.log('error', error));
}


/*Arregla las localidades que se imprimian en mayúsculas*/
function capitalize(word) {
    const loweredCase = word.toLowerCase();
    return word[0].toUpperCase() + loweredCase.slice(1);
}

function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    
    
    if (nombre=='' || nombre.length < 2) {
        document.getElementById("errorNombre").innerText = 'El nombre es obligatorio y debe tener al menos 2 caracteres'
    } else {
        document.getElementById("errorNombre").innerText = '' 
    }
    if (apellido=='' || apellido.length < 2) {
        document.getElementById("errorApellido").innerText = 'El apellido es obligatorio y debe tener al menos 2 caracteres';
    } else {
        document.getElementById("errorApellido").innerText = ''
    }
    if (email=='' || !email.isEmail()) {
        document.getElementById("errorEmail").innerText = 'El email es obligatorio y debe tener al menos 2 caracteres';
    } else {
        document.getElementById("errorEmail").innerText = ''
    }
    if (password=='' || password.length < 8) {
        document.getElementById("errorPassword").innerText = 'La password es obligatoria y debe tener al menos 8 caracteres';
    } else {
        document.getElementById("errorPassword").innerText = ''
    }
    if (passwordConfirm=='' || passwordConfirm.length < 8) {
        document.getElementById("errorPasswordConfirm").innerText = 'La confirmación es obligatoria y debe tener al menos 8 caracteres';
    } else {
        document.getElementById("errorPasswordConfirm").innerText = ''
    }
}

let avatar=document.getElementById('avatar')
  avatar.addEventListener('change', function(){
      let file = this.files[0]
      console.log(file)
      if (/.(gif|jpeg|jpg|png)$/i.test(file.type)) {
          document.getElementById("errorImagen").innerText = '';
      }else {
          document.getElementById("errorImagen").innerText = 'Los formatos de imagen admitidos son: .jpeg .jpg .gif .png'
      }
})