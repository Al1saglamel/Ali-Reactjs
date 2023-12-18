import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navText">
        <span>Dashboard</span>
        </div>
        <div className="icons">
          <img src="./search.svg" className="icon"/>
          <img src="./language.svg" className="icon" />
          <img src="./basket.svg" className="icon" />
          <div className="notification">
            <img src="./notifications.svg" />
            <span>4</span>
          </div>
          <div className="user">
            <img src="https://react.spruko.com/zem-ts/preview/assets/11-8c11e0d8.jpg" />
            <span>Test-Test</span>
          </div>
          <img src="./settings.svg" className="icon" />
        </div>
      </div>
    
  );
};

export default Navbar