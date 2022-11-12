import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
  return (
    <Link
      to={`/hero/${id}`}
      >
      <div className="ProductItem">
          <img src={heroImageUrl} alt={superhero} />
          <div className="product-info">{superhero}-{alter_ego}</div>
      </div>
    </Link>
  )
}
