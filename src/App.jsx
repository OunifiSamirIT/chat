import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Artists from './Pages/Artists';
import Profile from './Pages/Profile';
import Player from './components/Player';
import Releases from './Pages/Releases';
import Chat from './chatapp';

function App() {
  
  return (
    <div className= "App">
      <Router>
        <Header />
        <Sidebar />
        <Player />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
