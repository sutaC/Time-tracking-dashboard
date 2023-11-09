"use client";
import { ChangeEvent, useState } from "react";
import style from "./profileCard.module.css";
import Image from "next/image";

export type SelectTimeEvent = CustomEvent<{ value: string }>;

export default function ProfileCard() {
	const [selected, setSelected] = useState("weekly");

	function handleSelect(event: ChangeEvent) {
		const value = event.target.id;
		setSelected(value);
		const selectEvent = new CustomEvent("selectTime", {
			detail: { value },
		}) as SelectTimeEvent;
		document.dispatchEvent(selectEvent);
	}

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
					onChange={(e) => {
						handleSelect(e);
					}}
				/>
				<label htmlFor='daily'>Daily</label>
				<input
					type='radio'
					name='timeMenu'
					id='weekly'
					checked={selected === "weekly"}
					onChange={(e) => {
						handleSelect(e);
					}}
				/>
				<label htmlFor='weekly'>Weekly</label>
				<input
					type='radio'
					name='timeMenu'
					id='monthly'
					checked={selected === "monthly"}
					onChange={(e) => {
						handleSelect(e);
					}}
				/>
				<label htmlFor='monthly'>Monthly</label>
			</div>
		</div>
	);
}
