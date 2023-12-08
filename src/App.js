import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ZerothPage} from "./pages/0-page";
import {FirstPage} from "./pages/1-page";
import {SecondPage} from "./pages/2-page";
import {ThirdPage} from "./pages/3-page";
import {FourthPage} from "./pages/4-page";
import {FifthPage} from "./pages/5-page";
import {Gift} from "./widgets/Gift";
import {useEffect, useState} from "react";

function App() {
    const birthday = new Date('12.23.2022 00:00').getTime();
    const [needDate, setNeedDate] = useState(birthday - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setNeedDate(birthday - Date.now());
            if(needDate > 0) {
                console.log(~~((birthday - Date.now())/1000/60));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={needDate > 0 ? <Gift/> : <FirstPage/>}/>
                    <Route path="00000000" element={needDate > 0 ? <Gift/> : <ZerothPage/>}/>
                    <Route path="75489384" element={needDate > 0 ? <Gift/> : <SecondPage/>}/>
                    <Route path="38109423" element={needDate > 0 ? <Gift/> : <ThirdPage/>}/>
                    <Route path="42763541" element={needDate > 0 ? <Gift/> : <FourthPage/>}/>
                    <Route path="13122019" element={needDate > 0 ? <Gift/> : <FifthPage/>}/>
                    <Route path="85301395" element={needDate > 0 ? <Gift/> : <div>6</div>}/>
                    <Route path="*" element={<div>не существует </div>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
