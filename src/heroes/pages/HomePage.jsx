import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <div className="ProductList">
        
        <Link
        to={`/marvel`}
        >
        <div className="ProductItem">
            <img src={`/assets/heroes/marvel-captain.jpg`} alt="" />
            <div className="product-info">Marvel</div>
        </div>

      </Link>
        <Link
        to={`/dc`}
        >
        <div className="ProductItem">
            <img src={`/assets/heroes/dc-arrow.jpg`} alt="" />
            <div className="product-info">DC</div>
        </div>
      </Link>
    </div>
  )
}
