import { PHPData, JsData } from "../Api/JsApi";
import { useState } from "react";
import TopicList from "../Component/TopicList";
import { useEffect } from "react";

const Home = () => {
  let [phpData, setPhpData] = useState([]);
  let [jsData, setJsData] = useState([]);
  let [language, setLanguage] = useState("");
  let [topic, setTopic] = useState("");
  let [result, setResultLanguage] = useState([]);
  //
  useEffect(() => {
    setPhpData(PHPData);
    setJsData(JsData);

    if (language == "PHP") {
      setResultLanguage(phpData);
    } else if (language == "JavaScript") {
      setResultLanguage(jsData);
    }
  }, [language, topic]);

  let LanguageHandle = (e) => setLanguage(e.target.value);
  let topicHandele = (e) => setTopic(e.target.value);

  return (
    <>
      <div className="py-4 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 offset-md-2">
              <h6 className="text-light">Select Language</h6>
              <select
                className="form-select"
                onChange={(e) => LanguageHandle(e)}
              >
                <option>JavaScript</option>
                <option>PHP</option>
              </select>
            </div>
            <div className="col-6 col-md-4" onChange={(e) => topicHandele(e)}>
              <h6 className="text-light">Select Topic</h6>
              <select className="form-select">
                <option>variable</option>
                <option>loop</option>
                <option>function</option>
                <option>object</option>
                <option>Arrays</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            {result.map((resultVal, index) => {
              if (resultVal.cat == topic) {
                return <TopicList resultVal={resultVal} index={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
