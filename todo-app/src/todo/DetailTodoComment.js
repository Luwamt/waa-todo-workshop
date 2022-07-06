import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';

const DetailToDoComment = () => {
  const params = useParams();

  const [saveCommentState, setCommentState] = useState({});

  const fetchTodoComment = async () => {
    const result = await axios.get('http://localhost:8082/todos');
    console.log(result.data)
    setCommentState(result.data);
    //   "http://localhost:8082/todos/"+ params.id+params.comment
    // );
   
  };

  useEffect(() => {
    fetchTodoComment();
  },[]);

  return (
    <div className="container">

      welcome to DetailToDoComment

      <h4>{saveCommentState.id}</h4>
      <h4>{saveCommentState.title}</h4>
    <h4>{saveCommentState.description}</h4> 
 
    </div>
  );
};
export default DetailToDoComment;
