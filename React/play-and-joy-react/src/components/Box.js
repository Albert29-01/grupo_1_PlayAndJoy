import React from 'react'
import './styles.css'

function Box(props) {
    return (
        <div className="col-md-4 mb-4">
        <div className={props.color}>
        <div className="card-body">
        <div className="row no-gutters align-items-center">
        <div className="col mr-2">
        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.title}</div>
        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.dato}</div>
        </div>
        <div className="col-auto">
        <i className={props.icono}></i>
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
    
    export default Box;