import React, {useState, useEffect} from 'react';


function ContentCounterWithAlert()
{
    const [counter, setCounter] = useState(0);

    function countCounter() 
    {
        setCounter(counter+1)
        alert(counter+1)

    }

    useEffect(() => {
        alert("componentDidMount")
    }, [])

    useEffect(() => {
        
        return () => {
        alert("componentWillUnmount")
        }
    }, [])


    return(
        <>
        {counter}

        <button onClick={() => countCounter()}>
         Contador
        </button>
        </>
    )
    
}

export default ContentCounterWithAlert;