import Personal from "../../components/personal/Personal"
import { singleProducts } from "../../data"
import "./singleProduct.scss"
const SingleProduct = () => {
  return (
    <div className="singleproduct">
        <Personal {...singleProducts}/>
    </div>
  )
}

export default SingleProduct