import React from 'react'
import SectionTypeOne from './pagesComponents/SectionTypeOne'
import SectionFiveImg from '../../img/sectionFive.png'

const SectionFive = () => {
    return (
        <div>

            <SectionTypeOne
            title = "Share your knowledge"
            contentOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam. Consectetur adipiscing elit duis tristique sollicitudin. Sollicitudin nibh sit amet commodo nulla facilisi."
            contentSecond = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam. Consectetur adipiscing elit duis tristique sollicitudin. Sollicitudin nibh sit amet commodo nulla facilisi."
            imgSTT = {SectionFiveImg}
            bgColor = "#f5fafe"
            sectionType = "five"
            />
            
        </div>
    )
}

export default SectionFive
