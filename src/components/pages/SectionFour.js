import React from 'react'
import SectionTypeOne from './pagesComponents/SectionTypeOne'
import SectionFourImg from '../../img/sectionFour.png'

const SectionFour = () => {
    return (
        <div>
            <SectionTypeOne
            title = "About SeekaHost University"
            contentOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam. Consectetur adipiscing elit duis tristique sollicitudin. Sollicitudin nibh sit amet commodo nulla facilisi."
            contentSecond = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam. Consectetur adipiscing elit duis tristique sollicitudin. Sollicitudin nibh sit amet commodo nulla facilisi."
            imgSTT = {SectionFourImg}
            bgColor = "#fff"
            sectionType = "four"
            />
        </div>
    )
}

export default SectionFour
