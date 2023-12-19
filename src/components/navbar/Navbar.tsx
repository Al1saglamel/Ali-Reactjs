import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navText">
        <span>Dashboard</span>
        </div>
        <div className="icons">
          <img src="./search.svg" className="icon" style={{cursor:"pointer"}}/>
          <img src="./language.svg" className="icon"  style={{cursor:"pointer"}} />
          <img src="./basket.svg" className="icon"  style={{cursor:"pointer"}} />
          <div className="notification">
            <img src="./notifications.svg" style={{cursor:"pointer"}} />
            <span>4</span>
          </div>
          <div className="user">
            {/* <img src="https://react.spruko.com/zem-ts/preview/assets/11-8c11e0d8.jpg" /> */}
            <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" />
            <span>Test-Test</span>
          </div>
          <img src="./settings.svg" className="icon" />
        </div>
      </div>
    
  );
};

export default Navbar