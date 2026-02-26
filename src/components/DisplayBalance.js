import React from 'react'
import { Statistic } from 'semantic-ui-react';
function DisplayBalance(
    {title,value,color='black',size='small'}
) {
  return (
    <div> 
        <Statistic size={size} color={color}  >
          <Statistic.Label>{title}</Statistic.Label>
         <Statistic.Value  style={{ textAlign:'right',fontSize:'.5rem'}}>{value}</Statistic.Value>
       </Statistic>
  </div>
  )
}

export default DisplayBalance