import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../goals/goalSlice";


export default function NoteItem({ goal }) {
    const dispatch = useDispatch()

    return (
        <div className='goal'>
             <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
             <h2>{goal.text}</h2>
             <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
               Delete<FaTrash/>  
             </button>
        </div>
    )
}