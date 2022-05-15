import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Diagram from '../../modules/Diagram/';
import { clearQuestionsList } from '../../redux/qa-tests/qa-test-slice';
import styles from './ResultsPage.module.css';
import catImage from '../../images/cat.png';
import { useEffect } from 'react';
import { getQuestionType } from '../../redux/qa-tests/qa-test-selectors';
import API from '../../API/qa-test';
import useLocalStorage from '../../shared/hooks/useLocalStorage';

function ResultsPage() {
  const dispatch = useDispatch();
  const questionType = useSelector(getQuestionType);
  const [answers, setAnswers] = useLocalStorage('answers', null);
  const [results, setResults] = useLocalStorage('results', null);

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await API.getResults({ questionType, answers });
        setResults(data);
        setAnswers(null);
      } catch (error) {
        throw error;
      }
    };
    answers && getStats();
  });

  // const { mainMessage = '', secondaryMessage = '', correctAnswers = 0 } = results;
  const data = [
    { value: results?.correctAnswers, name: `Correct` },

    { value: 12 - results?.correctAnswers, name: `Incorrect` },
  ];

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.headline}>Results</h1>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            {questionType === 'theory' && '[ TESTING THEORY_]'}
            {questionType === 'theory' && '[QA technical training_]'}
          </h2>
        </div>
        <Diagram data={data} />
        <div>
          <div className={styles.statscontainer}>
            <span className={styles.stats}>Correct answers - {results?.correctAnswers}</span>
            <span className={styles.stats}>Total questions - 12</span>
          </div>
        </div>
        <div className={styles.lowestsect}>
          <img src={catImage} className={styles.catpic} alt={'a cat'} />
          <p className={styles.mainmessage}>{results?.mainMessage}</p>
          <p className={styles.secondarymessage}>{results?.secondaryMessage}</p>
          <Link
            className={styles.btn}
            to="/test"
            // onClick={() =>
            // }}
          >
            Try again
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ResultsPage;
