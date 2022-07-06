import axios from "axios";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";


const Todos = () => {
  const [todosState, settodoState] = useState([]);

  const fetchTodos = async () => {
    const result = await axios.get('http://localhost:8082/todos');
    console.log(result.data);
    settodoState(result.data);
}

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
    
    {
        todosState.map((item) => {
            return <Todo
                id={item.id}
                title={item.title}
                key={item.id}
            />
        })
    }
</div>

  );
};

export default Todos;
