import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Diagram from '../../modules/Diagram/';
import { clearQuestionsList } from '../../redux/qa-tests/qa-test-slice';
import styles from './ResultsPage.module.css';
import catImage from '../../images/cat.png';

function ResultsPage() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Results</h1>
      <h2 className={styles.title}>{'[ TESTING THEORY_]'}</h2>
      <Diagram />
      <div>
        <ul>
          <li>
            <p className={styles.stats}>Correct</p>
          </li>
          <li>
            <p className={styles.stats}>Incorrect</p>
          </li>
        </ul>
      </div>
      <div>
        <img src={catImage} className={styles.catpic} alt={'a cat'} />
        <p className={styles.mainMessage}>Bad!</p>
        <p className={styles.secondaryMessage}>You're the worst motherfucker QA!</p>
        <Link to="/test" onClick={() => dispatch(clearQuestionsList())}>
          Try again
        </Link>
      </div>
    </div>
  );
}

export default ResultsPage;
