import React, {Component, Fragment}from 'react';


class Carrousel extends Component
{

    state= {
        actual: 0
      }
  

    render()
    {
        const {children} = this.props
        return(
            <>
            
                <img src="https://i.ya-webdesign.com/images/video-button-png-18.png" width="70" height="70" onClick={this.onClickGoButton}/>    
            
            
            <Fragment>
                {children[this.state.actual]}
            </Fragment>
        
            
                <img src="back.png" width="70" height="70" onClick={this.onClickBackButton} />
        
            </>
        )
    }

    onClickGoButton= () => {
  
        if(this.state.actual == this.props.children.length - 1)
        {
            this.setState({ actual: 0});
        }
        else
        {
            this.setState({ actual: this.state.actual +1 });
        }
      } 
  
      onClickBackButton= () => {
  
        if(this.state.actual == 0)
        {
            this.setState({ actual: this.props.children.length -1 });
        }
        else
        {
            this.setState({ actual: this.state.actual -1 });
        }
      } 
}

export default Carrousel;