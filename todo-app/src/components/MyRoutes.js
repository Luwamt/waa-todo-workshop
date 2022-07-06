import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Todos from '../todo/Todos'
import DetailToDo from '../todo/DetailTodo'
import DetalToDoComment  from '../todo/DetailTodoComment'
import PageNotFound from '../todo/PageNotFound'

const MyRoutes = () => {
  return (

    <div>

<Routes>
           <Route path="/todos" element={ <Todos></Todos>} /> 

           <Route path="/todos/:id" element={ <DetailToDo></DetailToDo>} /> 
           <Route path="/todos/:id/comment" element={ <DetalToDoComment></DetalToDoComment>} /> 
            </Routes>
    </div>
  )
}

export default MyRoutes