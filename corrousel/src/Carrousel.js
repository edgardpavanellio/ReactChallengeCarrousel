import React, {useState, useCallback}from 'react';


function Carrousel(props)
{


    const [actual, setActual] = useState(0);

      
    const onClickGoButton = useCallback((children) => 
    {
            
        if(actual == children.length - 1)
        {
            setActual(0)
        }
        else
        {
            setActual(actual + 1)
        }

    }, [actual]);

    const onClickBackButton = useCallback((children) => 
    {
            
        if(actual == 0)
        {
            setActual(children.length -1);
        }
        else
        {
            setActual(actual -1 );
        }

    }, [actual]);
      

        return(
            <>
            
                <img src="https://i.ya-webdesign.com/images/video-button-png-18.png" width="70" height="70" onClick={() => onClickGoButton(props.children)}/>    
            
                {props.children[actual]}
          
                <img src="back.png" width="70" height="70" onClick={() => onClickBackButton(props.children)} />
        
            </>
        )

    }     

export default Carrousel;