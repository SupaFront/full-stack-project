import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Diagram from '../../modules/Diagram/';
import styles from './ResultsPage.module.css';
import catImage from '../../images/cat.png';
import { useEffect, useState } from 'react';
import { getQuestionType } from '../../redux/qa-tests/qa-test-selectors';
import API from '../../API/qa-test';
import useLocalStorage from '../../shared/hooks/useLocalStorage';

function ResultsPage() {
  const questionType = useSelector(getQuestionType);
  const [quests, setQuests] = useLocalStorage('resultTest', null);
  const [results, setResults] = useLocalStorage('results', null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getStats = async () => {
      setResults(null);
      try {
        const answers = quests.map(item => ({
          _id: item._id,
          answer: item.answer,
        }));
        const data = await API.getResults({ questionType, answers });
        setResults(data);
        setQuests(null);
        setLoaded(true);
      } catch (error) {
        throw error;
      }
    };
    quests && getStats();
  }, []);

  const correct = results?.correctAnswers;
  const incorrect = results?.totalQuestions - results?.correctAnswers;

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.headline}>Results</h1>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            {questionType === 'theory' && '[ TESTING THEORY_]'}
            {questionType === 'tech' && '[QA technical training_]'}
          </h2>
        </div>
        {loaded && (
          <Diagram
            data={[
              { value: correct, name: 'Correct' },
              { value: incorrect, name: 'Incorrect' },
            ]}
          />
        )}
        <div>
          <div className={styles.statscontainer}>
            <span className={styles.stats}>Correct answers - {results?.correctAnswers}</span>
            <span className={styles.stats}>Total questions - {results?.totalQuestions}</span>
          </div>
        </div>
        <div className={styles.lowestsect}>
          <img src={catImage} className={styles.catpic} alt={'a cat'} />
          <p className={styles.mainmessage}>{results?.mainMessage}</p>
          <p className={styles.secondarymessage}>{results?.secondaryMessage}</p>
          <Link
            className={styles.btn}
            to="/"
            onClick={() => {
              setResults(null);
              setQuests(null);
              localStorage.setItem('currentQuest');
            }}
          >
            Try again
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ResultsPage;
