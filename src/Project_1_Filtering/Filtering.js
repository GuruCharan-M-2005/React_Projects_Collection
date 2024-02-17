import React, { useState } from 'react';
import './Filtering.css'; 

export default function Filtering() {
    const [searchValue, setSearchValue] = useState('');
    const [fruits] = useState(["Apple", "Banana", "Orange", "Grapes", "Strawberry",
        "Pineapple", "Watermelon", "Mango", "Kiwi", "Peach",
        "Pear", "Cherry", "Blueberry", "Plum", "Lemon",
        "Avocado", "Pomegranate", "Raspberry", "Blackberry", "Cranberry",
        "Apricot", "Coconut", "Fig", "Guava", "Lychee",
        "Passionfruit", "Tangerine", "Papaya", "Lime", "Dragonfruit"
    ]);

    const filterFruits = fruits.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <div style={{ paddingTop: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Filtering Fruits</h1><br />
            <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="textbox-style" />
            <div className="main-style">
                {filterFruits.map((item, index) => (
                    <li key={index} className="list-style" onClick={(e)=>setSearchValue(item)}>{item}</li>
                ))}
            </div>
        </div>
    );
}
