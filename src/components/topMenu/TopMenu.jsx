import React from 'react';
import classes from './topmenu.module.css'

const TopMenu = () => {
    return (
        <div className={classes.topMenu}>
                <div className={classes.topMenuCont}>
                    <div className={classes.topMenuItems}>

                        <div className={classes.topMenuItemLeft}>
                            <div className={classes.topMenuItem}>Main</div>
                        </div>

                        <div className={classes.topMenuItemCenter}>
                            <div key={'menuItem1'} className={classes.topMenuItem}>Education</div>
                            <div key={'menuItem2'} className={classes.topMenuItem}>Experience</div>
                            <div key={'menuItem3'} className={classes.topMenuItem}>Skills</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default TopMenu;
