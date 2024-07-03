import React,{Fragment} from 'react'
import Mealssummary from './Mealssummary';
import Available from './Available';
function Meals() {
  return (
    <Fragment>
        <Mealssummary/>
        <Available/>
    </Fragment>
  )
}

export default Meals
