const QuestForm = (questCount=1, questText) => {
  return (
      <form action="#">
        <p>
          Question <span>{questCount}</span> / 12
        </p>
        <h2>{questText}</h2>
      </form>
  );
};

export default QuestForm;
