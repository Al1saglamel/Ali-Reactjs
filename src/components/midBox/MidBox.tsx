import "./midBox.scss"
import { topDealUsers } from "../../data.ts"

const MidBox = () => {
  return (
    <div className="midBox">
        <h2>Top Deals</h2>
        <div className="list">
          {topDealUsers.map(user=>(
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} />
                <div className="usertext">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>  
              </div>
              <div className="amount">${user.amount}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MidBox