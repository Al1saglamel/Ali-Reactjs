import Personal from "../../components/personal/Personal"
import { singleUsers } from "../../data"
import "./singleUser.scss"

const SingleUser = () => {
  return (
    <div className="singleuser">
        <Personal {...singleUsers}/>
    </div>
  )
}

export default SingleUser