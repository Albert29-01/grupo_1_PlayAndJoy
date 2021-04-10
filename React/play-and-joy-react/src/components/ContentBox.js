import React from 'react'
import Box from './Box'
import './styles.css'

function ContentBox(props) {
    return (
        <div className="row">
            {props.boxes.map((box)=>{
             return <Box title={box.title} dato={box.dato} icono={box.icono} color={box.color}/>
            })}
        </div>
        )
    }
    
export default ContentBox;