const TopicList = ({ resultVal, index }) => {
  let { cat, title, des } = resultVal;
  return (
    <>
      <div className="card my-4" key={index}>
        <div className="card-body">
          <h4 className="body-title">{title}</h4>
          <p className="card-content">{des}</p>
        </div>
      </div>
    </>
  );
};

export default TopicList;
