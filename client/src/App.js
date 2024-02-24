import MainForm from "./pages/MainForm";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div>
      <MainForm/>
    </div>
  );
}

export default App;
