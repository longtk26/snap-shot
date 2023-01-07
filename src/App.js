import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Search from "./components/Search";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <div className="container">
                    <h1 className="header">SnapShot</h1>
                    <Routes>
                        <Route path="/" element={<Search />}></Route>
                        <Route path="/:location" element={<Search />}></Route>
                        <Route
                            path="/search/:location"
                            element={<Search />}
                        ></Route>
                    </Routes>
                </div>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
