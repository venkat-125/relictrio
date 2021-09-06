import React from 'react';
import { Benifits, BannerBlock, Card, FurtherDetails, GetInTouch, Main, Technologies, WhyUs, Blog, Details} from '../molecules';



function Body(props){
    return(
        <div>
          <Main /> 
         <BannerBlock /> 
          {/* <Details /> */}
          <Benifits />
          <Technologies /> 
          <WhyUs />
          <FurtherDetails />
          <Blog />
          <Card />
           <GetInTouch /> 
           
        </div>
    )
}

Body.defaultProps = {
};

export default Body;