import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "./pages/1-page";
import {SecondPage} from "./pages/2-page";
import ThirdPage from "./pages/3-page/ui/ThirdPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="75489384" element={<SecondPage/>}/>
                    <Route path="38109423" element={<ThirdPage/>}/>
                    <Route path="42763541" element={<div>4</div>}/>
                    <Route path="13122019" element={<div>5</div>}/>
                    <Route path="*" element={<div>не существует </div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
