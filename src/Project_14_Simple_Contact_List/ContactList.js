import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactList.css';

export default function ContactList() {
  const [items, setItems] = useState([]);

  const URL = "http://localhost:3200/items";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
      console.log("Fetch Success");
    } catch (err) {
      console.log("Fetch Failure" + err);
    }
  };

  const deleteuser=async (id)=>{
    try {
        const res = await axios.delete(`${URL}/${id}`);
        console.log("Delete Success");
      } catch (err) {
        console.log("Delete Failure" + err);
      }
      fetchData()
  }

  return (
    <div className="contact-list">
      {items.map((data) => (
        <div>
        <div className="contact-item">
        <div  key={data.id}>
          <img src={data.image} alt={data.name} className="contact-image" />
        </div>
          <div className="contact-data">
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
            <h3>{data.email}</h3>
          </div>
          </div>
          <button onClick={()=>deleteuser(data.id)} className="button-style">Delete</button>
          </div>
      ))}
    </div>
  );
}
