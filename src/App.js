import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Search from "./components/Search";

function App() {
    return (
        <div className="container">
            <h1 className="header">SnapShot</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Search />}></Route>
                    <Route path="/:location" element={<Search />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
