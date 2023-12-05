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
                    <Route path="98128491" element={<ThirdPage/>}/>
                    <Route path="13122019" element={<ThirdPage/>}/>//atl
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
