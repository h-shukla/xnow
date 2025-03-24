import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll">
                <header className="snap-start">
                    <Navbar />
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <section className="snap-start">
                                <Home />
                            </section>
                        }
                    />
                </Routes>
                <footer className="snap-start">
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
