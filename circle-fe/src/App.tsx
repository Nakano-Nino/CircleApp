import Main from "./Layout/Main"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ThreadDetail from "@/pages/ThreadDetail"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="thread/:id" element={<ThreadDetail />} />
        </Route>
        <Route path="/login" element={<Login />} >
        </Route>
      </Routes>  
    </Router>
  )
}

export default App
