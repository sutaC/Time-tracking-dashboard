"use client";
import style from "./card.module.css";
import Image from "next/image";
import { SelectTimeEvent } from "./profileCard";
import { useEffect, useState } from "react";

type Timeframe = {
	current: number;
	previous: number;
};

export type Category = {
	title: string;
	timeframes: {
		daily: Timeframe;
		weekly: Timeframe;
		monthly: Timeframe;
	};
};

export default function Card(params: { category: Category }) {
	const [timeframe, setTimeframe] = useState(
		params.category.timeframes.weekly
	);
	const [timeScale, setTimeScale] = useState("Week");

	function handleTimeChange(event: SelectTimeEvent) {
		const value = event.detail.value;
		switch (value) {
			case "daily":
				setTimeframe(params.category.timeframes.daily);
				setTimeScale("Day");
				break;
			case "weekly":
				setTimeframe(params.category.timeframes.weekly);
				setTimeScale("Week");
				break;
			case "monthly":
				setTimeframe(params.category.timeframes.monthly);
				setTimeScale("Month");
				break;
		}
	}

	useEffect(() => {
		document.addEventListener("selectTime", (e) => {
			handleTimeChange(e as SelectTimeEvent);
		});
	}, []);

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
					<p className={style.time}>{timeframe.current}hrs</p>
					<small>
						Last {timeScale} - {timeframe.previous}
						hrs
					</small>
				</div>
			</div>
		</div>
	);
}
