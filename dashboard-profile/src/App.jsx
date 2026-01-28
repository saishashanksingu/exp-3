import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function Profile(){
  return (
    <div className="page">
      <h1>Sai Shashank</h1>
      <h2>BE CSE AIML</h2>
      <h2>Full Stack Developer</h2>
    </div>
  );
}

function DashBoard(){
  return (
    <div className="page">
      <h1>Skills</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
    </div>
  );
}

function App(){
  return(
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;