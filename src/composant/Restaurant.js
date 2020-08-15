import React from 'react'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Restaurant() {

    const lang = useSelector(state => state.languageReducer.language)

    return (
        <div className='part5-center'>
            <div className="color-part5"style={{display:'flex', justifyContent:"space-evently"}}>
            <div className='image-test-part5'>
                <div className='image-center'>
                    <img src='../../chef.jpg' alt='Philippe-labbé' width='100%' data-aos="zoom-out-right" data-aos-delay="800" data-aos-easing="ease-in-sine"></img>
                </div>
                <div className='restaurant-philippe'>

                        <h2 data-aos="zoom-out-left" data-aos-delay="800" data-aos-easing="ease-in-sine">{translation(lang,"h2p03")}</h2>
                        <div>
                        <p data-aos="zoom-out-left" data-aos-delay="1000" data-aos-easing="ease-in-sine">Philippe Labbé</p>
                        <p data-aos="zoom-out-left" data-aos-delay="1200" data-aos-easing="ease-in-sine">{translation(lang,"p03")}</p>
                        <p data-aos="zoom-out-left" data-aos-delay="1400" data-aos-easing="ease-in-sine">{translation(lang,"chef01")}</p> 
                        <p data-aos="zoom-out-left" data-aos-delay="1600" data-aos-easing="ease-in-sine">{translation(lang,"chef02")}</p>
                        </div>

                </div>
            </div>
            </div>


        </div>
    )
}

export default Restaurant
