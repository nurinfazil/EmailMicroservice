import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Pages/Register"
import Confirm from "./Pages/Confirm"
import Display from "./Pages/Display"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
        <Route path="/email-sent" element={<Confirm />}></Route>
        <Route path="/account-verification/:id" element={<Display />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
