const axios = require ('axios');
const defaults = require('./default')
const url = 'provincias'

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