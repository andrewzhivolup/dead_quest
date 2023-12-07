import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "./pages/1-page";
import {SecondPage} from "./pages/2-page";
import {ThirdPage} from "./pages/3-page";
import {FourthPage} from "./pages/4-page";
import {FifthPage} from "./pages/5-page";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="75489384" element={<SecondPage/>}/>
                    <Route path="38109423" element={<ThirdPage/>}/>
                    <Route path="42763541" element={<FourthPage/>}/>
                    <Route path="13122019" element={<FifthPage/>}/>
                    <Route path="85301395" element={<div>6</div>}/>
                    <Route path="*" element={<div>не существует </div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
