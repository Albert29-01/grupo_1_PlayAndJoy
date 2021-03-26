const axios = require ('axios');
const defaults = require('./default')
const url = 'provincias'

/*https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre*/

const provinciasRequest = {
    getProvincias: function(){
        return axios({
            ...defaults,
            method:'get',
            url:`${url}`,
            params: {
                campos:'id,nombre'
            }
        })
    }
}

module.exports = provinciasRequest;