import React from 'react';
import ourValue1 from '../../../../assets/whoWeAre/aboutUs/ourValue_1.svg';
import ourValue2 from '../../../../assets/whoWeAre/aboutUs/ourValue_2.svg';
import ourValue3 from '../../../../assets/whoWeAre/aboutUs/ourValue_3.svg';
import { OurValuesStyle } from './styles'
function OurValues() {
  return (
    <OurValuesStyle>
 <div className='our-values'>
        <h3>Our Values</h3>
        <ul>
           <li><img src={ourValue1} /> Be Socially Responsible</li> 
           <li><img src={ourValue2} /> Deliver High Value at optimized costs</li> 
           <li><img src={ourValue3} /> Celebrate Diversity</li> 
        </ul>
    </div>
    </OurValuesStyle>
   
  )
}

export default OurValues
