import React from 'react'
import {useNavigate} from 'react-router'

const Todo = (props) => {

  const navigate =useNavigate();

  const onClicked=(id)=>{
    navigate('/todos/' + id);
  }

  return (
    <div>
    <div onClick={() => { onClicked(props.id) }}>
    <h2>{props.title}</h2>
    </div>
    </div>
    
)
}

export default Todo