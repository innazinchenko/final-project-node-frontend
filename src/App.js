import './App.css';
import { useState, useEffect } from 'react';
import { getAllTravels, addTravel, editTravel, deleteTravel } from './FetchTravels';
import { MyTravels } from './MyTravels';


function App() {
const [myTravel, setTravel] = useState([]);
const [title, setTitle] = useState("");
const [editing, setEditing] = useState(false);
const [travelId, setTravelId] = useState("")


useEffect(() => {
  getAllTravels(setTravel)
}, [])

const updatingInInput = (_id, title) => {
  setEditing(true)
  setTitle(title)
  setTravelId(_id)
}

  return (
    <div>
      <h1>Must see in the city:</h1>

      <input
      type="text"
      placeholder="Add a place..."
      value = {title}
      onChange = {(e) => setTitle(e.target.value)}
      />

<button onClick=
      {editing ? () => editTravel(travelId, title, setTravel, setTitle, setEditing) : () => addTravel(title, setTitle, setTravel)}>
      {editing ? "Edit" : "Add"}
        </button>

      {myTravel.map((travel) => <MyTravels text={travel.title} key={travel._id}
      updatingInInput={() => updatingInInput(travel._id, travel.title)}
      deleteTravel={() => deleteTravel(travel._id, setTravel)}/>
      )}

    </div>
  );
}

export default App;
