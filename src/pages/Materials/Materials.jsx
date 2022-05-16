import styles from "./Materials.module.css";

function Materials() {
	return (
		<section className={ styles.materialsSection }>
			<div className={ styles.titleContainer }>
				<h3 className={ styles.title }>Useful literature</h3>
			</div>
			<ul className={ styles.materialsList }>
				<li className={ styles.materialsItem }>1. Testing dot.com Savin.</li>
				<li className={ styles.materialsItem }>2. A mental hospital in the hands of patients.</li>
				<li className={ styles.materialsItem }>3. Scrum. J. Sutherland.</li>
			</ul>

			<div className={ styles.titleContainer }>
				<h3 className={ styles.title }>Useful resources</h3>
			</div>
			<ul className={ styles.materialsList }>
				<li className={ styles.materialsItem }>
					1.&nbsp;
					<a
						className={ styles.materialsLink }
						href="https://dou.ua/"
						target="_blank"
						rel="noopener noreferrer"
					>
						dou.ua
					</a>
				</li>
				<li className={ styles.materialsItem }>
					2.&nbsp;
					<a
						className={ styles.materialsLink }
						href="https://habr.com/ru/all/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Habr
					</a>
				</li>
				<li className={ styles.materialsItem }>
					3.&nbsp;
					<a
						className={ styles.materialsLink }
						href="https://goit.ua/"
						target="_blank"
						rel="noopener noreferrer"
					>
						goit.ua
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Materials;
