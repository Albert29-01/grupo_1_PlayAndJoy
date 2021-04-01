const axios = require ('axios');
const defaults = require('./default')
const url = 'localidades'

const localidadesRequest = {
    getLocalidades: function(id){
        return axios({
            ...defaults,
            method:'get',
            url:`${url}`,
            params: {
                campos:'id,nombre',
                max:4142
            }
        })
    }
}

module.exports = localidadesRequest;