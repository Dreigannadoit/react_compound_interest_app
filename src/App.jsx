import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import CompuondIntCal from "./pages/CompuondIntCal"

const App = () => {
  return (
    <main>
        <Router>
            <Routes>
              <Route path="/" element={<CompuondIntCal />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App