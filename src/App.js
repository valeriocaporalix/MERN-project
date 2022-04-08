import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import PlanList from "./components/plan-list.component";
import EditPlan from "./components/edit-plan.component";
import CreatePlan from "./components/create-plan.component";
import ShowPlan from "./components/show-plan.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Work Plan Timeline</h1>
        </header>
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<PlanList/>}/>
          <Route path="/edit/:id" element={<EditPlan/>} />
          <Route path="/create" element={<CreatePlan/>} />
          <Route path="/show/:id" element={<ShowPlan/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;