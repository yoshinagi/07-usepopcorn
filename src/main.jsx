import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
import StarRating from './StarRating.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating maxRating={5} color="red" size={24} defaultRating={3} />
  </React.StrictMode>
);
