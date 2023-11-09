"use client";
import style from "./card.module.css";
import Image from "next/image";

export type Category = {
	title: string;
	timeframes: {
		daily: {
			current: number;
			previous: number;
		};
		weekly: {
			current: number;
			previous: number;
		};
		monthly: {
			current: number;
			previous: number;
		};
	};
};

export default function Card(params: { category: Category }) {
	return (
		<div className={style.cardContainer}>
			<div className={style.cardContent}>
				<div className={style.wrapper}>
					<p className={style.heading}>{params.category.title}</p>
					<Image
						className={style.menu}
						src={"/images/icon-ellipsis.svg"}
						alt='Menu'
						width={20}
						height={5}
					></Image>
				</div>
				<div className={style.wrapper}>
					<p className={style.time}>
						{params.category.timeframes.weekly.current}hrs
					</p>
					<small>
						Last Week - {params.category.timeframes.weekly.previous}
						hrs
					</small>
				</div>
			</div>
		</div>
	);
}
