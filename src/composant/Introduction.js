import React from 'react'
import { useSelector } from 'react-redux'
import {translation} from "../I18n/i18n";

function Introduction() {
    const lang = useSelector(state => state.languageReducer.language)

    return (

        <div className='description-h1'>

            <div className='h1-accueil'>

                <h1 style={{fontSize:'50px', margin:0}} data-aos="fade-right" data-aos-delay="700" data-aos-easing="ease-in-sine">{translation(lang,"h2p01")}</h1>
                <p data-aos="fade-right" data-aos-delay="1400" data-aos-easing="ease-in-sine"> {translation(lang,"p01")}</p>
                <button className='button-introduction' data-aos="fade-right" data-aos-delay="2100" data-aos-easing="ease-in-sine">{translation(lang,"decouvrez")}</button>
            </div>

            <div className='image-2' data-aos="fade-left" data-aos-delay="1400" data-aos-easing="ease-in-sine">

            </div>


        </div>
    )
}

export default Introduction
