import React from 'react';
import classes from './education.module.css'
import done from '../../images/EducationPage/done.png'

const EducationPage = () => {



    return (
<div className='educationpage page' style={{"position": "relative", "top": "0vh"}}>
    <div className={classes.main_cart}>
            <div className={classes.cart}>
                <div className={classes.content}>
                    <div className={classes.l_cont}></div>
                    <div className={classes.r_cont}>
                        <div className={classes.ri_items}>
                            <div className={classes.r_item}>
                                <img src={done} alt="" />
                                <div className={classes.r_item_txt}>Graduation (Maturity)</div>
                            </div>

                            <div className={classes.r_item}>
                                <img src={done} alt="" />
                                <div className={classes.r_item_txt}>IT</div>
                            </div>
                        </div>

                        <div className={classes.c_cont}>
                            <div className={classes.c_item}>
                            I have successfully completed a Secondary Industrial School with a technical focus in the field of IT.
                            </div>
                        </div>

                    </div>

        

                </div>
            </div>
        </div>
</div>

    );
}

export default EducationPage;
