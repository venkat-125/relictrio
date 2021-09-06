import React from 'react';
import { Blog, Careers, Career_Blog, FurtherDetails, GetInTouch, JournySection, Technologies, Touch } from '../molecules';

export const CareersPage = () => {
    return(
        <div>
            <Careers />
            <FurtherDetails />
            {/* <JournySection /> */}
            <Career_Blog />
            <Touch />
        </div>
    )
}

export default CareersPage
