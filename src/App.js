import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Search from "./components/Search";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h1 className="header">SnapShot</h1>
                <Routes>
                    <Route path="/" element={<Search />}></Route>
                    <Route path="/:location" element={<Search />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
