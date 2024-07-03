
import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Backdrop = props =>{
return <div onClick={props.onclick} className={classes.backdrop}></div>
}
const Modaloverlay = props =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
function Modal(props) {
  return (<Fragment>
    {ReactDOM.createPortal(<Backdrop onclick= {props.hide}/>,document.getElementById('Overlays'))}
    {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,document.getElementById('Overlays'))}
  </Fragment>
           
  )
}

export default Modal;
