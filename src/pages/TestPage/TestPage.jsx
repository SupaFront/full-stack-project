import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Button from '../../shared/components/Button';
import ButtonArrowOnly from '../../shared/components/ButtonArrowOnly';
import QuestForm from '../../shared/components/QuestForm';

import API from '../../API/qa-test';

import s from './TestPage.module.css';

import allTestArray from '../../shared/components/RadioButtonsList/answers'; //only for test
import { getQuestionType } from '../../redux/qa-tests/qa-test-selectors';

let isFinished = false;
let text;
let path;

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

const TestPage = () => {
  // testPageName = "[Testing theory_]"
  const dispatch = useDispatch();

  const [testPageName, setTestPageName] = useState('[Testing theory_]');
  const [testQuestions, setTestQuestions] = useState(allTestArray);
  const [currentQuest, setCurrentQuest] = useState(0);
  // const questionType = useSelector(getQuestionType);

  useEffect(() => {
    path = localStorage.getItem('path');
    setTestPageName(testType[path]);
    // const receiveQuests = async () => {
    //   try {
    //     const data = await API.getQuestions(questionType);
    //     setTestQuestions(data);
    //   } catch (err) {
    //     throw err;
    //   }
    // };
    // receiveQuests();
  }, [dispatch]);

  const questionText = testQuestions[currentQuest]?.question;

  const answersVariants = testQuestions[currentQuest]?.answers;

  const questCount = testQuestions.length;

  text = isFinished ? 'Finish test' : 'Cancel test';

  path = isFinished ? '/results' : '/';

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

  const isAnswered = answersList.findIndex(item => {
    return item?._id === testQuestions[currentQuest]._id;
  });

  console.log('isAnswered', isAnswered);

  if (currentQuest + 1 === questCount && !isAnswered) {
    btnImgRightStyle = 'btnImgRightDisabled';
    btnArrowRightStyle = 'btnArrowRightDisabled';
    btnImgRightDisabledFlag = true;
    btnArrowRightDisabledFlag = true;
  } else {
    btnImgRightStyle = 'btnImgRight';
    btnArrowRightStyle = 'btnArrowRight';
    btnImgRightDisabledFlag = false;
    btnArrowRightDisabledFlag = false;
  }

  const handleClick = answer => {
    // alert(answer);
    // console.log(
    //   answersList.findIndex((item) => {
    //     return item?._id === testQuestions[currentQuest]._id;
    //   })
    // );

    const checkAnswer = answersList.findIndex(item => {
      return item?._id === testQuestions[currentQuest]._id;
    });

    if (checkAnswer === -1) {
      answersList.push({ _id: testQuestions[currentQuest]._id, answer });
    } else {
      answersList[checkAnswer] = {
        _id: testQuestions[currentQuest]._id,
        answer,
      };
    }

    console.log(answersList);

    // console.log({ _id: testQuestions[currentQuest]._id, answer });
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{testPageName}</h2>
        <NavLink to={path} className={s.btn}>
          {text}
        </NavLink>
      </div>
      <QuestForm
        questCount={currentQuest + 1}
        maxCount={questCount}
        questionText={questionText}
        answersList={answersVariants}
        answer={answersList[currentQuest]}
        onClick={handleClick}
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
      </div>
    </div>
  );
};

export default TestPage;
