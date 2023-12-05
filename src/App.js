import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "./pages/1-page";
import {SecondPage} from "./pages/2-page";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="75489384" element={<SecondPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
