import style from "./card.module.css";
import Image from "next/image";

export default function Card() {
	return (
		<div className={style.cardContainer}>
			<div className={style.cardContent}>
				<div className={style.wrapper}>
					<p className={style.heading}>Work</p>
					<Image
						className={style.menu}
						src={"/images/icon-ellipsis.svg"}
						alt='Menu'
						width={20}
						height={5}
					></Image>
				</div>
				<div className={style.wrapper}>
					<p className={style.time}>32hrs</p>
					<small>Last Week - 8hrs</small>
				</div>
			</div>
		</div>
	);
}
