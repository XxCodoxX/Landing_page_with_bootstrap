import React from 'react'

const Cardcomp = ({
    image,
    title,
    description
}) => {
    return (
        <>
            <div class="col-sm-12 col-md-6 col-lg-3 centering">
                    <div class="course-card">
                        <div class="course-image">
                            <img src="https://source.unsplash.com/random/" alt=""/>
                        </div>
                        <div class="course-details">
                            <p class="course-title">
                                {title}
                            </p>
                            <p class="course-conduct-by">
                                by 
                                <span class="course-conducter">
                                    <a href="">
                                        {description}
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Cardcomp
