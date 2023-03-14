import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './component/Home';
import Sidebar from './component/Sidebar';
import NavigationBar from './component/NavigationBar';
import CandidateRecruitmentForm from './pages/recruitmentPortalCandidate/component/CandidateRecruitmentForm';
import CandidateRecruitmentRegion from '../src/pages/recruitmentPortalRegion/component/CandidateRecruitmentRegionList'
import { IRecruitmentPortalCandidate } from './pages/recruitmentPortalCandidate/modal/IRecruitmentPortalCandidate';

function App() {




    
  return (
      <BrowserRouter>
        <NavigationBar />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/candidateRecruitmentForm" element={<CandidateRecruitmentForm />}/>
              <Route path="/candidateRecruitmentRegion" element={<CandidateRecruitmentRegion/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
  );
}

export default App;
