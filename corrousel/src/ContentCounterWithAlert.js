import React, {useState, useEffect} from 'react';


function ContentCounterWithAlert()
{
    const [counter, setCounter] = useState(0);

  
    useEffect(() => {
        alert("componentDidMount")

        return () => {
            alert("componentWillUnmount")
            }

    }, [])

    useEffect(() => {
        document.title = `You clicked ${counter} times`;
        alert(counter);
      }, [counter]); 


    return(
        <>
        {counter}

        <button onClick={() => setCounter(counter+1)}>
         Contador
        </button>
        </>
    )
    
}

export default ContentCounterWithAlert;