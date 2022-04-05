import axios from "axios";

const API_URL = 'http://localhost:3001/api/notes/'

const createNote = async(noteData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    

    const response =  await axios.post(API_URL, noteData, config)

    return response.data
}

const getNotes = async(noteData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    

    const response =  await axios.get(API_URL, config)

    return response.data
}

const noteService = {
    createNote,
    getNotes,
}

export default noteService