import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AllTransactions from "./pages/AllTransactions";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all-transactions" element={<AllTransactions />} />
                </Routes>
            </Layout>

        </Router>
    );
}

export default App;
