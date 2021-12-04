import React from 'react'

const ButtenTypeOne = ({
    name,
    bgColor,
    btnCount
}) => {
  if(btnCount === "one"){
    return(

      <>
        <div class="row w-100">
            <a href="#" className="view-btn" style={{backgroundColor:bgColor}}>
              {name}
            </a>
          </div>
        </>

    )

  }
  if(btnCount === "second"){
    return(

      <>
        <div class="row w-100 justify-content-center align-items-center">
            <a href="#" className="view-btn" style={{backgroundColor:bgColor}}>
              {name}
            </a>
          </div>
        </>

    )
  }
}

export default ButtenTypeOne
