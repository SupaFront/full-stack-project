import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Diagram from '../../modules/Diagram/';
import { clearQuestionsList } from '../../redux/qa-tests/qa-test-slice';
import styles from './ResultsPage.module.css';
import catImage from '../../images/cat.png';

function ResultsPage() {
	const dispatch = useDispatch();

	return (
		<main>
			<div className={ styles.container }>
				<h1 className={ styles.headline }>Results</h1>
				<div className={ styles.titleContainer }>
					<h2 className={ styles.title }>{ '[ TESTING THEORY_]' }</h2>
				</div>
				<Diagram />
				<div>
					<div className={ styles.statscontainer }>
						<span className={ styles.stats }>Correct answers - 9</span>
						<span className={ styles.stats }>Total questions - 12</span>
					</div>
				</div>
				<div className={ styles.lowestsect }>
					<img src={ catImage } className={ styles.catpic } alt={ 'a cat' } />
					<p className={ styles.mainmessage }>Not Bad!</p>
					<p className={ styles.secondarymessage }>But you still need to learn some materials.</p>
					<Link
						className={ styles.btn }
						to="/test"
						onClick={ () => {
							// dispatch(clearQuestionsList())
						} }
					>
						Try again
					</Link>
				</div>
			</div>
		</main>
	);
}

export default ResultsPage;
