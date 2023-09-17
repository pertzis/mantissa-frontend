import Sidebar from "@components/Sidebar/Sidebar"
import Dashboard from "@pages/Dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <main className="flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
