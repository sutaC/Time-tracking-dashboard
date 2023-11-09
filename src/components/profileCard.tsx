import { useState } from "react";
import style from "./profileCard.module.css";
import Image from "next/image";

export default function ProfileCard() {
	const [selected, setSelected] = useState("weekly");

	return (
		<div className={style.profileCard}>
			<div className={style.heading}>
				<Image
					src={"/images/image-jeremy.png"}
					alt='Profile picture'
					width={75}
					height={75}
				></Image>
				<div>
					<small>Report for</small>
					<p className={style.name}>Jeremy Robson</p>
				</div>
			</div>
			<div className={style.menu}>
				<input
					type='radio'
					name='timeMenu'
					id='daily'
					checked={selected === "daily"}
					onChange={() => {
						setSelected("daily");
					}}
				/>
				<label htmlFor='daily'>Daily</label>
				<input
					type='radio'
					name='timeMenu'
					id='weekly'
					checked={selected === "weekly"}
					onChange={() => {
						setSelected("weekly");
					}}
				/>
				<label htmlFor='weekly'>Weekly</label>
				<input
					type='radio'
					name='timeMenu'
					id='monthly'
					checked={selected === "monthly"}
					onChange={() => {
						setSelected("monthly");
					}}
				/>
				<label htmlFor='monthly'>Monthly</label>
			</div>
		</div>
	);
}
