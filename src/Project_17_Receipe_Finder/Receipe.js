import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Receipe.css';

export default function Receipe() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  const URL = "http://localhost:3200/recipes";

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="receipe-container">
          <h1>Guru's Recipe Center</h1>
          <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} className="search-input"/>
        </div>
      <div className="items-container">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div key={item.id} className="item">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-ingredients"><h4>Ingredients:</h4>{item.ingredients}</p>
              <p className="item-description"><h4>Description:</h4>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
 
