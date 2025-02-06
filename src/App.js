
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AskMore from './pages/AskMore';
import BeNotified from './pages/BeNotified';
import Interests from './pages/Interests';
import JoinDiscord from './pages/JoinDiscord';
import KahloHouse from './pages/KahloHouse';
import MCQTwo from './pages/MCQTwo';
import MCQThree from './pages/MCQThree';
import MCQFive from './pages/MCQFive';
import MCQSix from './pages/MCQSix';
import MCQEight from './pages/MCQEight';
import MCQFour from './pages/MCQFour';
import School from './pages/School';
import SignUp from './pages/SignUp';
import StartingVibe from './pages/StartingVibe';
import Thanks from './pages/Thanks';
import Welcome from './pages/Welcome';
import Pledge from './pages/Pledge';
import SignPledge from './pages/SignPledge';
import McqOne from './pages/McqOne';
import MCQSeven from './pages/MCQSeven';

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Space Mono',
      'Arial',
    ].join(','),
  },});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/askMore" element={<AskMore />} />
        <Route path="/beNotified" element={<BeNotified />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/joinDiscord" element={<JoinDiscord />} />
        <Route path="/kahloHouse" element={<KahloHouse />} />
        <Route path="/mcqOne" element={<McqOne />} />
        <Route path="/mcqTwo" element={<MCQTwo />} />
        <Route path="/mcqThree" element={<MCQThree />} />
        <Route path="/mcqFour" element={<MCQFour />} />
        <Route path="/mcqFive" element={<MCQFive />} />
        <Route path="/mcqSix" element={<MCQSix />} />
        <Route path="/mcqSeven" element={<MCQSeven />} />
        <Route path="/mcqEight" element={<MCQEight />} />
        <Route path="/startingVibe" element={<StartingVibe />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/pledge" element={<Pledge />} />
        <Route path="/signPledge" element={<SignPledge/>} />
        <Route path="/school" element={<School />} />
      </Routes>
      
    </Router>
    </ThemeProvider>
  );
}

export default App;
