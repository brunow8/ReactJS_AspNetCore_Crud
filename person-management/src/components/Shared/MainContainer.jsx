const MainContainer = (props) => {
  return (
    //In case that the component receive a class from parameter the container will 
    //change it's form.
    <div className={`container ${props.HomePage ? "" : "containerApp"}`} >
        <div className="row">
            {props.children}
        </div>
    </div>
  )
}
export default MainContainer;