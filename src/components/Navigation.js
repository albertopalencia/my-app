import React, { Component}  from 'react';

class  Navigation  extends Component {

    render(){
        return(
            <nav className="nav navbar-dark bg-dark">
            <a className="text-white">
                { this.props.titulo }    
            </a> 
           </nav>  
        );
    }
}

export  default Navigation;