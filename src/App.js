// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DeafaultTemplate from "./components/templates/DeafaultTemplate";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import InfoPage from "./pages/InfoPage";
import './App.css'

const App = () => {
  return (
      <BrowserRouter>
          <div className="app">
              <Routes>
                  <Route path="/" element={<DeafaultTemplate><HomePage /></DeafaultTemplate>} />
                  <Route path="/photos" element={<DeafaultTemplate><PhotosPage /></DeafaultTemplate>} />
                  <Route path="/info" element={<DeafaultTemplate><InfoPage /></DeafaultTemplate>} />
                  <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};
export default App;
