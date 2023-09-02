import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import CreateContact from "./pages/CreateContact";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/createcontact" element={<CreateContact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
