const axios = require ('axios');
const defaults = require('./default')
const url = 'provincias'

const provinciasRequest = {
    getProvincias: function(id){
        return axios({
            ...defaults,
            method:'get',
            url:`${url}`,
            params: {
                id: id,
                campos:'id,nombre',
            },
        })
    }
}

module.exports = provinciasRequest;