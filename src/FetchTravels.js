import axios from 'axios';

const getAllTravels = (setTravel) => {
    axios.get("https://final-project-node-iuvt.onrender.com")
    .then(({data}) => {setTravel(data);
    })
}

const addTravel = (title, setTitle, setTravel) => {
    axios.post("https://final-project-node-iuvt.onrender.com/saveTravels", { title })
    .then((data) => {
        setTitle("")
        getAllTravels(setTravel)
    })
}

const editTravel = (travelId, title, setTravel, setTitle, setEditing) => {
    axios.post("https://final-project-node-iuvt.onrender.com/editTravel", { _id: travelId, title })
    .then((data) => {
        setTitle("")
        setEditing(false)
        getAllTravels(setTravel)
    })
}

const deleteTravel = (_id, setTravel) => {
    axios.post("https://final-project-node-iuvt.onrender.com/deleteTravel", { _id })
    .then((data) => {
        getAllTravels(setTravel)
    })
}


export {getAllTravels, addTravel, editTravel, deleteTravel};