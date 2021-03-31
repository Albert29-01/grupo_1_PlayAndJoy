function selectProvincia(event){
    let provinciaID = document.getElementById('pepe').value.toString()
    console.log('ID Provincia',provinciaID)
    fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia='+provinciaID+'&campos=id,nombre&max=100')
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        for (let i = 0; i < data.municipios.length; i++) {
           document.querySelector('select.municipio').innerHTML += '<option value='+data.municipios[i].id+'>'+data.municipios[i].nombre+'</option>' 
        }
        console.log('Data Municipios',data)
    })
}