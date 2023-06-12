import React, {useEffect} from 'react';
import classes from './titlepage.module.css'
import play from '../../images/frontPage/play.png'

import ellipse from '../../images/frontPage/ellipse.png'

const TitlePage = () => {




    return (
    <div className='titlepage page' style={{"position": "relative", "top": "0vh"}}>
        <div className={classes.main_cart}>
            <div className={classes.cart}>
                <div className={classes.content}>

                    <div className={classes.content_left}>
                        <div className={classes.titleCont}>
                            <div className={classes.tite}>Hello,</div>
                            <div className={classes.tite_2}>I am Oleg</div>
                        </div>

                        <div className={classes.btn_auto}>
                                Auto
                            <img src={play} className={classes.img_play} alt="" />
                        </div>
                    </div>

                    <div className={classes.content_right}>
                        <div className={classes.cr_canvas}>
                            <img src={ellipse} className={classes.ellipse} alt="" />

                        </div>      
                    </div>
                    
                </div>  
            </div>
        </div>
    </div>
    );
}


export default TitlePage;
