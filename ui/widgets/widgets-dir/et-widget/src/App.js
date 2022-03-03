import {getData} from "./integration/Integration";
import {useState} from "react";
import './App.css';

function App() {
    const [payload, setPayload] = useState("")
    async function callTheApi() {
        setPayload((await getData()).data.payload)
    }

    return (
        <>
            <div className="btn-div">
                <button onClick={callTheApi}>call the api</button>
            </div>
            <div>
                <span>{payload}</span>
            </div>
        </>
    )
}

export default App
