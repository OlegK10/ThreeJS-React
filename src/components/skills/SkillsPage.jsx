import React, {useEffect} from 'react';
import './sp_works.css'
import classes from './skillspage.module.css'
import $ from 'jquery'
import './skillspset.js'

const SkillsPage = () => {

    useEffect(() => {
        $('.'+classes.lc_li).click(function(){
            $('.'+classes.lc_li).removeClass(classes.lc_li_actiive)
            $(this).addClass(classes.lc_li_actiive)
        })
    }, []);


    return (
<div className='skillpage page' style={{"position": "relative", "top": "0vh"}}>
    <div className={classes.main_cart}>
            <div className={classes.cart}>
                <div className={classes.content}>
                    <div className={classes.l_cont}>
                        <div className={classes.l_ul}>
                            <div className={classes.lc_li} key={'lli_1'}>HTML & CSS</div>
                            <div className={classes.lc_li} key={'lli_2'}>JQuery</div>
                            <div className={classes.lc_li} key={'lli_3'}>JavaScript</div>
                            <div className={classes.lc_li} key={'lli_4'}>React</div>
                            <div className={classes.lc_li} key={'lli_5'}>PHP</div>
                            <div className={classes.lc_li} key={'lli_11'}>SQL</div>
                            <div className={`${classes.lc_li} ${classes.lc_li_actiive}`} key={'lli_6'}>NodeJS</div>
                            <div className={classes.lc_li} key={'lli_7'}>Electron</div>
                            <div className={classes.lc_li} key={'lli_8'}>C# Unity</div>
                            <div className={classes.lc_li} key={'lli_10'}>Python</div>
                            <div className={classes.lc_li} key={'lli_9'}>Blender</div>
                        </div>
                    </div>

                    <div className={classes.r_cont}>

                        <div className={`${classes.r_html_css_c} ${classes.r_c}`}>

                            <div className={classes.r_c_row_co}>

                                <div className={classes.r_c_row}>

                                    <div className={classes.rhtc}>
                                            Using animations generator
                                        </div>

                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_1">
                                            </div>
                                        </div>

                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_2">
                                            </div>
                                        </div>

                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_3">
                                            </div>
                                        </div>

                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_4">
                                            </div>
                                        </div>

                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_5">
                                            </div>
                                        </div>

                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_6">
                                            </div>
                                        </div>
                                        <div className={classes.rhtc}>
                                            <div className="sp_s_loader_7">
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <div className={classes.r_c_row_co}>

                                <div className={classes.r_c_row}>

                                    <div className={`${classes.rhtc} ${classes.rhtc_inp}`}>
                                        Custom Inputs
                                    </div>

                                    <div className={`${classes.rhtc} ${classes.rhtc_inp}`}>
                                        <input type="text" className="custom_inp custom_inp_1" placeholder='Type...' />
                                    </div>
                                        
                                    <div className={`${classes.rhtc} ${classes.rhtc_inp}`}>
                                        <input type="range" className="custom_inp custom_inp_2" />
                                    </div>

                                    <div className={`${classes.rhtc} ${classes.rhtc_inp}`}>
                                        <div className="radio_itn_rhtc">

                                            <div className="rinrgGigb48 noselect">
                                                <label for="radio1">Option 1</label>
                                                    <div className="ASfggqeU948">
                                                        <input type="radio" id="radio1" name="radioGroup" className='Rinp5Fas' value="option1" />
                                                        <div className="Rinp5Fas_act">+</div>
                                                    </div>
                                            </div>

                                            <div className="rinrgGigb48 noselect">
                                                <label for="radio1">Option 2</label>
                                                    <div className="ASfggqeU948">
                                                        <input type="radio" id="radio1" name="radioGroup" className='Rinp5Fas' value="option1" />
                                                        <div className="Rinp5Fas_act">+</div>
                                                    </div>
                                            </div>
                                            
                                            <div className="rinrgGigb48 noselect">
                                                <label for="radio1">Option 3</label>
                                                    <div className="ASfggqeU948">
                                                        <input type="radio" id="radio1" name="radioGroup" className='Rinp5Fas' value="option1" />
                                                        <div className="Rinp5Fas_act">+</div>
                                                    </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
    );
}

export default SkillsPage;
