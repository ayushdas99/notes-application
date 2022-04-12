import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import NotesForm from "../Components/NotesForm";
import { getGoals, reset } from "../goals/goalSlice";
import { message } from "statuses";
import NoteItem from "../Components/NoteItem";




export default function Dashboard(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector(
      (state) => state.auth)

    const { goals,isError} = useSelector((state) => state.goals)  
     
    useEffect(() => {
      if(isError){
        console.log(message)
      }
      if(!user){
        navigate('/login')
      }
      dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
    }, [user, navigate, isError, message, dispatch])  
      

    
     
    return(
        <>
        <section className="heading">
            <h1>Welcome { user && user.name } </h1>
            <p>Add your notes and enjoy!</p>
        </section>
        <NotesForm />
        <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <NoteItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You haven't added any notes yet!</h3>
        )}
      </section>
        
        </>
    )
}