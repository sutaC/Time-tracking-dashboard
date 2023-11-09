import ProfileCard from "@/components/profileCard";
import Card, { Category } from "@/components/card";
import styles from "./page.module.css";
import json from "@/../public/documents/assets/data/data.json";

export default async function Page() {
	const data = json as Category[];

	return (
		<main className={styles.main}>
			<ProfileCard></ProfileCard>
			{data.map((category, idx) => {
				return <Card key={idx} category={category}></Card>;
			})}
		</main>
	);
}
