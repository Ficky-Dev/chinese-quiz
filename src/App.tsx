import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ChineseQuiz from './ChineseQuiz'
import AnotherQuiz from './AnotherQuiz'
import './App.css'

function Navigation() {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          margin: 0
        }}>Chinese Quiz App</h1>
        <nav style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <Link
            to="/"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            Original Quiz
          </Link>
          <Link
            to="/251130"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#059669',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#047857'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          >
            Quiz 251130
          </Link>
        </nav>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<ChineseQuiz />} />
          <Route path="/251130" element={<AnotherQuiz />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
