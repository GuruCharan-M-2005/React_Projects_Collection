// // LAUNCH JSON FILE USING JSON SERVER

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Todo_List.css';

// export default function Todo_List() {
//   const URL = 'http://localhost:3700/Items';

//   const [newItem, setNewItem] = useState('');
//   const [items, setItems] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(URL);
//       setItems(res.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const createNewItem = async () => {
//     try {
//       if(newItem!==""){
//         const response = await axios.post(URL, {name: newItem, checked: false });
//         console.log('New item created:');
//         fetchData();
//         setNewItem('')
//       }
//     } catch (error) {
//       console.error('Error creating new item:', error);
//     }
//   };

//   const updateCheckedStatus = async (id, checked) => {
//     try {
//       const response = await axios.patch(`${URL}/${id}`, { checked });
//       console.log('Item updated:');
//       fetchData();
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   const deleteItem = async (id) => {
//     try {
//       const response = await axios.delete(`${URL}/${id}`);
//       console.log('Item deleted:');
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div className='main-body'>
//       <h1 className='topic-name'>Todo_List</h1>
//       <div>
//         <input className='text-box-input' type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
//         <button className='add-button' onClick={createNewItem}>Add</button>
//       </div>
//       <div>
//         <h3>Todo Lists are here:</h3>
//         {items.length === 0 && "No Todos here"}
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               <input type='checkbox' checked={item.checked} onChange={(e) => updateCheckedStatus(item.id, e.target.checked)}/>
//               {item.name}
//               <button onClick={() => deleteItem(item.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


// Todo_List.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todo_List.css';

export default function Todo_List() {
  const URL = 'http://localhost:3700/Items';

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createNewItem = async () => {
    try {
      if (newItem !== '') {
        const response = await axios.post(URL, { name: newItem, checked: false });
        console.log('New item created:');
        fetchData();
        setNewItem('');
      }
    } catch (error) {
      console.error('Error creating new item:', error);
    }
  };

  const updateCheckedStatus = async (id, checked) => {
    try {
      const response = await axios.patch(`${URL}/${id}`, { checked });
      console.log('Item updated:');
      fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`${URL}/${id}`);
      console.log('Item deleted:');
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Enter new task" />
        <button onClick={createNewItem}>Add</button>
      </div>
      <div>
        <h3>Todo Lists are here:</h3>
        {items.length === 0 && "No Todos here"}
        <ul className="todo-list">
          {items.map((item) => (
            <li className="todo-item" key={item.id}>
              <input type='checkbox' className='check-box-item' checked={item.checked} onChange={(e) => updateCheckedStatus(item.id, e.target.checked)} />
              <span className={item.checked ? 'checked' : ''}>{item.name}</span>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
