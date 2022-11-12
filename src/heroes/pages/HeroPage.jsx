import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
	const { heroId: id } = useParams();
	const navigate = useNavigate();
	const hero = useMemo(() => getHeroById(id), [id]);

	const onNavigateBack = () => {
		navigate(-1);
	}


	if (!hero) return <Navigate to="/" />
	return (
		<>
			<div className="ProductList">

				<div className="ProductItem">

					<img
						src={`/assets/heroes/${id}.jpg`}
						alt={hero.superhero}
					/>
				</div>
				<div>

					<h3>{hero.superhero}</h3>
					<ul>
						<li>{hero.alter_ego}</li>
						<li>{hero.publisher}</li>
						<li>{hero.first_appearance}</li>
					</ul>
					<h3>Personajes</h3>
					<ul>
						<li>{hero.characters}</li>
					</ul>
					<div className="btn-back">
						<button 
							onClick={onNavigateBack}
						>
							Regresar
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
