import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Button from '../../shared/components/Button';
import ButtonArrowOnly from '../../shared/components/ButtonArrowOnly';
import QuestForm from '../../shared/components/QuestForm';

import API from '../../API/qa-test';

import s from './TestPage.module.css';

import { getQuestionType } from '../../redux/qa-tests/qa-test-selectors';

const answersList = [];

const testType = {
  tech: '[QA technical training_]',
  theory: '[Testing theory_]',
};

let btnImgLeftStyle;
let btnArrowLeftStyle;
let btnImgLeftDisabledFlag;
let btnArrowLeftDisabledFlag;

let btnArrowRightStyle;
let btnImgRightStyle;
let btnImgRightDisabledFlag;
let btnArrowRightDisabledFlag;

let btnFinishTestStyle;

const TestPage = () => {
  const [testPageName, setTestPageName] = useState('[Testing theory_]');
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuest, setCurrentQuest] = useState(0);

  const questionType = useSelector(getQuestionType);

  useEffect(() => {
<<<<<<< HEAD
    path = localStorage.getItem('path');
=======
    btnFinishTestStyle = s.btnFinishInvisible;

    const path = localStorage.getItem("path");
>>>>>>> d4500b7a25efd36cf10f1e74b332f7026cad86d6

    setTestPageName(testType[path]);

    const receiveQuests = async () => {
      try {
        const data = await API.getQuestions(questionType);

        const modifiedData = data.map(item => ({ ...item, answer: '' }));

        setTestQuestions(modifiedData);
      } catch (err) {
        throw err;
      }
    };

    receiveQuests();
  }, []);

  const questCount = testQuestions?.length;

<<<<<<< HEAD
  text = isFinished ? 'Finish test' : 'Cancel test';

  path = isFinished ? '/results' : '/';

=======
>>>>>>> d4500b7a25efd36cf10f1e74b332f7026cad86d6
  if (!currentQuest) {
    btnImgLeftStyle = 'btnImgLeftDisabled';
    btnArrowLeftStyle = 'btnArrowLeftDisabled';
    btnImgLeftDisabledFlag = true;
    btnArrowLeftDisabledFlag = true;
  } else {
    btnImgLeftStyle = 'btnImgLeft';
    btnArrowLeftStyle = 'btnArrowLeft';
    btnImgLeftDisabledFlag = false;
    btnArrowLeftDisabledFlag = false;
  }

<<<<<<< HEAD
  const isAnswered = answersList.findIndex(item => {
    return item?._id === testQuestions[currentQuest]._id;
  });

  console.log('isAnswered', isAnswered);

  if (currentQuest + 1 === questCount) {
    btnImgRightStyle = 'btnImgRightDisabled';
    btnArrowRightStyle = 'btnArrowRightDisabled';
=======
  if (!testQuestions[currentQuest]?.answer) {
    btnImgRightStyle = "btnImgRightDisabled";
    btnArrowRightStyle = "btnArrowRightDisabled";
>>>>>>> d4500b7a25efd36cf10f1e74b332f7026cad86d6
    btnImgRightDisabledFlag = true;
    btnArrowRightDisabledFlag = true;
  } else {
    btnImgRightStyle = 'btnImgRight';
    btnArrowRightStyle = 'btnArrowRight';
    btnImgRightDisabledFlag = false;
    btnArrowRightDisabledFlag = false;
  }

<<<<<<< HEAD
  const handleChange = answer => {
=======

  if (currentQuest + 1 === questCount) {
    btnImgRightStyle = "btnImgRightInvisible";
    btnArrowRightStyle = "btnArrowRightInvisible";
    btnFinishTestStyle = s.btnFinishDisabled;
  }

  if (currentQuest + 1 === questCount && testQuestions[currentQuest]?.answer) {
    btnFinishTestStyle = s.btnFinish;
  }

  const handleChange = (answer) => {
>>>>>>> d4500b7a25efd36cf10f1e74b332f7026cad86d6
    testQuestions[currentQuest].answer = answer;
    setTestQuestions([...testQuestions]);

    const resultTest = testQuestions.map(({ _id, answer }) => ({
      id: _id,
      answer,
    }));

<<<<<<< HEAD
    localStorage.setItem('resultTest', JSON.stringify(resultTest));
=======
    localStorage.setItem("resultTest", JSON.stringify(resultTest));

>>>>>>> d4500b7a25efd36cf10f1e74b332f7026cad86d6
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <NavLink to={"/"} className={s.btn}>
          {"Cancel test"}
        </NavLink>
      </div>
      <QuestForm
        currentQuest={currentQuest}
        testQuestions={testQuestions}
        onChange={handleChange}
      />
      <div className={s.wrapperBtn}>
        <Button
          text="Previous question"
          img={true}
          imgName={'arrow-left'}
          width={24}
          height={16}
          styles={btnImgLeftStyle}
          disabled={btnImgLeftDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest - 1)}
        />
        <Button
          text="Next question"
          img={true}
          imgName={'arrow-right'}
          width={24}
          height={16}
          styles={btnImgRightStyle}
          disabled={btnImgRightDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest + 1)}
        />
        <ButtonArrowOnly
          imgName={'arrow-left'}
          width={24}
          height={16}
          styles={btnArrowLeftStyle}
          disabled={btnArrowLeftDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest - 1)}
        />
        <ButtonArrowOnly
          imgName={'arrow-right'}
          width={24}
          height={16}
          styles={btnArrowRightStyle}
          disabled={btnArrowRightDisabledFlag}
          onClick={() => setCurrentQuest(currentQuest + 1)}
        />
        <NavLink
          to={testQuestions[currentQuest]?.answer ? "/results" : "#"}
          className={btnFinishTestStyle}
        >
          {"Finish test"}
        </NavLink>
      </div>
    </div>
  );
};

export default TestPage;
