import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './interfaces/Dashboard/Dashboard';
import AgentesIA from './interfaces/AgentesIA/AgentesIA'; // Import AgentesIA component
import SignIn from './interfaces/Authentication/SignIn'; // Import SignIn component
import SignUp from './interfaces/Authentication/SignUp'; // Correctly import SignUp component
import SupportForm from "./interfaces/SupportForm/SupportForm";
import RecoverAccount from './interfaces/Authentication/RecoverAccount'; // Import RecoverAccount component
import IdentificationPanel from "./interfaces/IdentificationPanel/IdentificationPanel";
import Reportes from "./interfaces/Reportes/Reportes"; // Import the Reportes component
import GoalsManager from "./interfaces/GolasManager/GoalsManager";
import PsychologistsDirective from "./interfaces/PsychologistsDirective/PsychologistsDirective";
import MarkAgent from "./interfaces/AgentesIA/MarkAgent";
import MeditationPlaces from "./interfaces/Places/MeditationPlaces";
import RunningPlaces from "./interfaces/Places/RunningPlaces";
import RelaxingPlaces from "./interfaces/Places/RelaxingPlaces";
import RobertAgent from "./interfaces/AgentesIA/RobertAgent";
import DavidAgent from "./interfaces/AgentesIA/DavidAgent";
import './App.css';
import JohnAgent from "./interfaces/AgentesIA/JohnAgent";
import AmandaAgent from "./interfaces/AgentesIA/AmandaAgent";
import NicoleAgent from "./interfaces/AgentesIA/NicoleAgent";
import EmmaAgent from "./interfaces/AgentesIA/EmmaAgent";
import LauraAgent from "./interfaces/AgentesIA/LauraAgent";
import LisaAgent from "./interfaces/AgentesIA/LisaAgent";
import MarinaAgent from "./interfaces/AgentesIA/MarinaAgent";
import JessicaAgent from "./interfaces/AgentesIA/JessicaAgent";
import SarahAgent from "./interfaces/AgentesIA/SarahAgent";
import Notifications from "./interfaces/Notifications/Notifications";
import GuiasPersonalizadas from "./interfaces/GuiasPersonalizadas/GuiasPersonalizadas";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Home route */}
            <Route path="/guias-personalizadas" element={<GuiasPersonalizadas />} />
            <Route path="/agentes-ia" element={<AgentesIA />} /> {/* Route for AgentesIA */}
            <Route path="/sign-in" element={<SignIn />} /> {/* Route for Sign In */}
            <Route path="/sign-up" element={<SignUp />} /> {/* Route for Sign Up */}
            <Route path="/recover-account" element={<RecoverAccount />} /> {/* Route for Recover Account */}
            <Route path="/red-de-apoyo" element={<SupportForm />} />
            <Route path="/identification" element={<IdentificationPanel />} />
            <Route path="/psicologos/reportes" element={<Reportes />} /> {/* New route for Reportes */}
            <Route path="/goals" element={<GoalsManager />} />
            <Route path="/psicologos/directive" element={<PsychologistsDirective />} />
            <Route path="/meditation" element={<MeditationPlaces />} />
            <Route path="/running-places" element={<RunningPlaces />} />
            <Route path="/relaxing" element={<RelaxingPlaces />} />
            <Route path="/john-agent" element={<JohnAgent />} />
            <Route path="/amanda-agent" element={<AmandaAgent />} />
            <Route path="/mark-agent" element={<MarkAgent />} />
            <Route path="/david-agent" element={<DavidAgent />} />
            <Route path="/nicole-agent" element={<NicoleAgent />} />
            <Route path="/emma-agent" element={<EmmaAgent />} />
            <Route path="/laura-agent" element={<LauraAgent />} />
            <Route path="/jessica-agent" element={<JessicaAgent />} />
            <Route path="/lisa-agent" element={<LisaAgent />} />
            <Route path="/marina-agent" element={<MarinaAgent />} />
            <Route path="/sarah-agent" element={<SarahAgent />} />
            <Route path="/robert-agent" element={<RobertAgent />} />
            <Route path="/notifications" element={<Notifications />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
