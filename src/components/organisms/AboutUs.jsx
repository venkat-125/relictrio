import React from 'react';
import { BannerSection, Blog, Contact, CoreValues, FooterList, FurtherDetails, GetInTouch, IntroSection, JournySection, Mission, Strength, Vision, WhoWeAre } from '../molecules';
 


export const AboutUs = () => {
    return(
        <div>
             <BannerSection />
             <IntroSection />
             <JournySection />
             <WhoWeAre />
              <Mission />
             <Strength />
               <Vision />
              <CoreValues />
             <FurtherDetails />
             <Contact />
             <GetInTouch />  
        </div>
    )
}