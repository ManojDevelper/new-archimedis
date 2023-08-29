import React from 'react';
import { WeOperateStyle } from './styles';
import operateImg from '../../../../assets/services/weOperate/we_operate.svg';

function WeOperate() {
  return (
    <WeOperateStyle>
     <div className='we-operate'>
        <h1>We operate at the intersection of Digital and Life Sciences</h1>
        <img src={operateImg} alt='img' />
     </div>
    </WeOperateStyle>
  
  )
}

export default WeOperate