import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <marquee>
        <h1>Welcome to my Profile</h1>
      </marquee>
      <h2>SAI SHASHANK SINGU</h2>
      <br />
      <h2>Full Stack Developer</h2>
    </>
  );
}

function DashBoard() {
  return (
    <>
      <marquee>
        <h1>This is the main dashboard</h1>
      </marquee>
      <h2>These are my skills</h2>
      <br />
      <h3>WEB DEV</h3>
      <br />
      <h3>DATA ANALYTICS</h3>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Buttons */}
      <Link to="/profile">
        <button>Profile</button>
      </Link>

      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>

      {/* Routes */}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
