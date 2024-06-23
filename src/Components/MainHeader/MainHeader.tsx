import React from 'react'

const MainHeader = () => {
  const location = window.location.pathname
  console.log(location, "location");
  
  let pathName = ""
  if(location === "/") {
    pathName = "Analytics"
  }
  if(location === "/individuals") {
    pathName = "Individuals"
  }
  if(location === "/organizations") {
    pathName = "Organizations"
  }
  if(location === "/feedback") {
    pathName = "Feedback"
  }
  if(location === "/feedback") {
    pathName = "Feedback"
  }
  if(location === "/pushNotifications") {
    pathName = "Push Notifications"
  }
  return (
    <>
      <div className="col-span-2 max-md:col-span-5 h-[80%] flex pl-3 items-center">
        <span className="text-2xl max-sm:text-[16px]">
          {pathName}
        </span>
      </div>
    </>
  )
}

export default MainHeader
