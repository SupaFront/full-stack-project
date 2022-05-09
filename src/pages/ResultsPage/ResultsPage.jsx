import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Diagram from '../../modules/Diagram/';
import { clearQuestionsList } from '../../redux/qa-tests/qa-test-slice';
import styles from './ResultsPage.module.css';

function ResultsPage() {
  const dispatch = useDispatch();

  return (
    <main>
      <h1 className={styles.headline}>Results</h1>
      <h2 className={styles.title}>{'[ testing theory_]'}</h2>
      <Diagram />
      <div>
        <ul>
          <li>
            <p className={styles.resultsStats}></p>
          </li>
          <li>
            <p className={styles.resultsStats}></p>
          </li>
        </ul>
      </div>
      <div>
        <img className={styles.catPic} alt={'a cat'} />
        <p className={styles.mainMessage}></p>
        <p className={styles.secondaryMessage}></p>
        <Link to="/test" onClick={() => dispatch(clearQuestionsList())} />
      </div>
    </main>
  );
}

export default ResultsPage;
