import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChineseQuiz from './ChineseQuiz'
import AnotherQuiz from './AnotherQuiz'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        <Routes>
          <Route path="/" element={<ChineseQuiz />} />
          <Route path="/251130" element={<AnotherQuiz />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
