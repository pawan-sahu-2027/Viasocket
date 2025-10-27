// import Home from "./home/Home";
import SideBar from "./component/SideBar";
import SignUp from "./component/SignUpPage";
import Home from "./landingPage/home";
import HomePage from "./homepage/HomePage";
import RegistrationPage from "./component/RegistrationPage";
import MetricsPage from "./metric/MetricsPage";
 
import ConnectionsPage from "./connectionsPage/ConnectionsPage"; 
import McpServerPage from "./mcpServerPage/McpServerPage";
import AiAgentsPage from "./aiAgentsPage/AiAgentsPage";  
import { Routes, Route, Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
             <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/signUp" element={<SignUp />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MetricsPage" element={<MetricsPage />} />
        <Route path="/ConnectionsPage" element={<ConnectionsPage />} />
        <Route path="/McpServerPage" element={<McpServerPage />} />
        <Route path="/AiAgentsPage" element={<AiAgentsPage />} />
      </Routes>

    </>
  );
}

export default App;
