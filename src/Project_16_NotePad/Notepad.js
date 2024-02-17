// Notepad.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notepad.css';

export default function Notepad() {
  const [items, setItems] = useState([]);
  const [newdata, setNewData] = useState('');
  const [search, setSearch] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const URL = "http://localhost:3200/items";

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
      console.log("success fetching");
    } catch (err) {
      console.log("error fetching" + err);
    }
  }

  const createData = async () => {
    try {
      if (newdata !== '') {
        await axios.post(URL, { data: newdata });
        setNewData('');
        console.log("success creating");
        fetchData();
      } else {
        alert("Enter data!!!");
      }
    } catch (err) {
      console.log("error creating" + err);
    }
  }

  const deleteData = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      console.log("success deleting");
      fetchData();
    } catch (err) {
      console.log("error deleting" + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={`notepad-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="notepad-actions">
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="notepad-search" />
        <button onClick={handleThemeToggle} className="theme-toggle-btn">Toggle Theme</button>
      </div>
      <div className="note-container">
        {items
          .filter(ans => ans.data.toLowerCase().includes(search.toLowerCase()))
          .map(ans => (
            <div className='note-flex'>
              <div key={ans.id} className="note">
                <p>{ans.data}</p>
              </div>
              <div className="note-actions">
                <button onClick={() => deleteData(ans.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
      </div>
      <div className="create-note">
        <input type='text' value={newdata} onChange={(e) => setNewData(e.target.value)} placeholder="Enter your note..." className="notepad-input"></input>
        <button onClick={createData} className="create-btn">Create</button>
      </div>
    </div>
  )
}
