import React, { useEffect } from 'react';
import classes from './experiencepage.module.css'
import txts from './txts.png'
const ExperiencePage = () => {

    return (
<div className='educationpage page' style={{"position": "relative", "top": "0vh"}}>
    <div className={classes.main_cart}>
            <div className={classes.cart}>
                <div className={classes.content}>
                    <img className={classes.c_img} src = {txts}  alt="" />
                </div>
            </div>
        </div>
</div>
    );
}

export default ExperiencePage;
