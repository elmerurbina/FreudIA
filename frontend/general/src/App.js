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
import AgenteFamilia from "./interfaces/AgentesIA/AgenteFamilia";
import MeditationPlaces from "./interfaces/Places/MeditationPlaces";
import RunningPlaces from "./interfaces/Places/RunningPlaces";
import RelaxingPlaces from "./interfaces/Places/RelaxingPlaces";
import AgenteObjetivos from "./interfaces/AgentesIA/AgenteObjetivos";
import AgenteAmigos from "./interfaces/AgentesIA/AgenteAmigos";
import './App.css';
import AgenteGeneral from "./interfaces/AgentesIA/AgenteGeneral";
import AgenteDiario from "./interfaces/AgentesIA/AgenteDiario";
import AgenteLove from "./interfaces/AgentesIA/AgenteLove";
import AgenteNegativo from "./interfaces/AgentesIA/AgenteNegativo";
import AgenteDesahogarme from "./interfaces/AgentesIA/AgenteDesahogarme";
import AgenteMotivacion from "./interfaces/AgentesIA/AgenteMotivacion";
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
            <Route path="/agente-general" element={<AgenteGeneral />} />
            <Route path="/agente-diario" element={<AgenteDiario />} />
            <Route path="/agente-familia" element={<AgenteFamilia />} />
            <Route path="/agente-amigos" element={<AgenteAmigos />} />
            <Route path="/agente-love" element={<AgenteLove />} />
            <Route path="/agente-negativo" element={<AgenteNegativo />} />
            <Route path="/agente-desahogarme" element={<AgenteDesahogarme />} />
            <Route path="/agente-motivacion" element={<AgenteMotivacion />} />
            <Route path="/agente-objetivos" element={<AgenteObjetivos />} />
            <Route path="/notifications" element={<Notifications />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
