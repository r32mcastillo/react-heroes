import { Link } from "react-router-dom";

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const assets = 'https://raw.githubusercontent.com/r32mcastillo/react-heroes/main';
	const heroImageUrl = `${assets}/assets/heroes/${id}.jpg`;
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
