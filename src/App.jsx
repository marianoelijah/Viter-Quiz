import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Quiz from './components/pages/frontend/Quiz'
import { StoreProvider } from './components/store/storeContext';
import Questions from './components/pages/backend/questions/Questions';

const App = () => {
  return (
    <StoreProvider>
       <Router>
        <Routes>
          <Route index element={<Quiz /> } />
          <Route path="admin/questions" element={<Questions/> } />
        </Routes>
    </Router>
    </StoreProvider>
   
  );
};

export default App;
