function myFunction(event){
    let provinciaID = document.querySelector('option.provincia').value
    fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia='+provinciaID+'&campos=id,nombre&max=100')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (let i = 0; i < data.municipios.length; i++) {
           document.querySelector('select.municipio').innerHTML += '<option value='+data.municipios[i].id+'>'+data.municipios[i].nombre+'</option>' 
        }
        console.log(data)
    })
}