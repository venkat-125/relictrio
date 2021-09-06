import React from 'react';

import { Body, Footer, Header } from '../organisms';



function HireDeveloper(props){

    console.log('Hire-Developer')
    return(
       <div>
            <Body/>
       </div>
       
    )
}

HireDeveloper.defaultProps = {
    selected: false,
  };

export default HireDeveloper;