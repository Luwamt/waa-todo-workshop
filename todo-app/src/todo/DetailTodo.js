import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const DetailTodo = () => {
  const params = useParams();

  const [todoState, setTodoState] = useState({});

  const fetchTodo = async () => {
    const result = await axios.get('http://localhost:8082/todos/' + params.id);
    console.log(result.data)
    setTodoState(result.data);
}

  useEffect(()=>{
    fetchTodo();
  },[params.id])

  const navigate =useNavigate();
  

  const onClicked=()=>{
    //navigate('/todos/');
    navigate('/todos/id/comment')
  }

  return (
  <div className="container">
    DetailToDo
    <h3>{todoState.title}</h3>
    <h3>{todoState.description}</h3> 
    <h1>{todoState.completed}</h1>
    
    <div onClick={() => { onClicked() }}>
    <button className="btn btn-primary">Show Comment</button>
    </div>
    </div>
    )
};

export default DetailTodo;
