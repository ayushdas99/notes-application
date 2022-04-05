import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import NotesForm from "../Components/NotesForm";
import Main from "./Main";
import Spinner from "../Layout/Spinner";
import { getNotes, reset } from "../notes/noteSlice";

export default function Dashboard(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {notes, isLoading, isError, message} = useSelector(
        (state) => state.notes
    )

    useEffect(() => {
        if(isError){
            console.log(message);
        }
        if(!user){
            navigate('/login')
        }
        dispatch(getNotes())
        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading) {
        return <Spinner />
    }
    return(
        <>
        <section className="heading">
            <h1>Welcome {user && user.name}</h1>
            <Main />
            <p>Add your notes and enjoy!</p>
        </section>
        <NotesForm />
        </>
    )
}