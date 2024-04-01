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
import ProjectsPage from "./pages/ProjectsPage";
import InfoPage from "./pages/InfoPage";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DeafaultTemplate><HomePage /></DeafaultTemplate>} />
          <Route path="/projects" element={<DeafaultTemplate><ProjectsPage /></DeafaultTemplate>} />
          <Route path="/info" element={<DeafaultTemplate><InfoPage /></DeafaultTemplate>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  );
};
export default App;
