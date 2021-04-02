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