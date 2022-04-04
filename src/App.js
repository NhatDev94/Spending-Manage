import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from './pages/Home';
import SpendingPage from './pages/SpendingPage';
import { useEffect } from 'react';

function App() {

  return (
    <div className="spending">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spendings" element={<SpendingPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
