import './App.css';
import Header from './Component/Header';
import NoteState from './Context/NoteState';
import {Route, Routes } from "react-router-dom";
import Home from './Containers/Home';
import About from './Containers/About';
import Note from './Containers/Note';
import Contact from './Containers/Contact';
function App() {
  return (
    <NoteState>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/note" element={<Note />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </NoteState>
  );
}
export default App;
