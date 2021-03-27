const axios = require ('axios');
const defaults = require('./default')
const url = 'municipios'

const municipiosRequest = {
    getMunicipios: function(id){
        return axios({
            ...defaults,
            method:'get',
            url:`${url}`,
            params: {
                provincia: id,
                campos:'id,nombre',
                max: 100
            }
        })
    }
}

module.exports = municipiosRequest;