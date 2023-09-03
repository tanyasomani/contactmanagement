import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/createcontact" element={<CreateContact/>}/>
        <Route path="/:id/editcontact" element={<EditContact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
