import axios from 'axios';

const API = "http://localhost:8080/api/notes/";

class NoteService{

    getAllNotes(){
        return axios.get(API);
    }

    deleteNote(noteId){
        axios.delete(API+"deleteById/"+noteId);
    }

    createNote(note){
        return axios.post(API,note);
    }

    updateNote(noteId,note){
        return axios.put(API+noteId,note);
    }


}

export default new NoteService();