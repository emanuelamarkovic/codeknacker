import './profile.css';
import { useState } from 'react';
import { useUserContext } from "../../contexts/UserContext";
import {userData} from '../../data/userdata';

export function Profile() {
  const { userState, dispatch } = useUserContext();
  const { username, password, score } = userState;
  const [newProfileValues, setProfileValues] = useState({username, password});
  const [editMode, setEditMode] = useState(false);

  const handleSaveChanges = () => {
    dispatch({
      type: "setUserProfile",
      value: newProfileValues,
    });
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileValues({
      ...newProfileValues,
      [name]: value,
    });
  }

  return (
    <div className="profile">
      <div className="profilePic"><img src={userData.pic} alt="" /></div>
      <div className="profileInfo">
        <label>
        Name: {editMode ? <input type="text" name="username" value={newProfileValues.username} onChange={handleChange} /> : username}
        </label>
        <label>Password: {editMode ? <input type="password" name="password" value={newProfileValues.password} onChange={handleChange} /> : '*****'}</label>
        <label>Your Score: {score}</label>
        {editMode ? (
          <button onClick={handleSaveChanges}>Save Changes</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
      </div>
    </div>
  )
}