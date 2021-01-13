import { useState } from "react"

function Counter(){
const [counter, setCounter] = useState(0);

const handleIncrese = ()=>{
setCounter(counter+1);
}


const handleDecrese = ()=>{
    setCounter(counter-1);
}



    return (

        <div>

            <button onClick={handleIncrese}>Incrementar</button>
            <button onClick={handleDecrese}>Decrementar</button>
            <h1>Valor do contador : {counter}</h1>
        </div>
    );
}

export default Counter;