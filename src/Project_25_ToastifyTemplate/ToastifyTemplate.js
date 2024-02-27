import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyTemplate = ({ data }) => {
  return (
    <div>
      <button onClick={()=>{toast(data)}}>Show Toast</button>
      <ToastContainer/>
    </div>
  );
};

export default ToastifyTemplate;
