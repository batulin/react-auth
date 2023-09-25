import Login from "./Login";
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized';
import LinkPage from './components/LinkPage';
import {Route, Routes} from "react-router-dom";
import Register from "./Register";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Lounge from "./components/Lounge";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="linkpage" element={<LinkPage />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            <Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>
                <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>
                <Route path="admin" element={<Admin />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={['ROLE_USER']}/>}>
                <Route path="lounge" element={<Lounge />} />
            </Route>

            <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  );
}

export default App;
