import { useState } from "react";
import "./accordian.css";
import accordianData from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiples, setMultiples] = useState([]);

  const handleSingleSelection = (accordianId) => {
    if (selected === accordianId) {
      setSelected(null);
    } else {
      setSelected(accordianId);
    }
  };

  const handleMultiSelection = (accordianId) => {
    let cpyMultiples = [...multiples];

    const findIndexOfCurrentId = cpyMultiples.indexOf(accordianId);

    if (findIndexOfCurrentId == -1) cpyMultiples.push(accordianId);
    else cpyMultiples.splice(findIndexOfCurrentId, 1);

    setMultiples(cpyMultiples);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <div>
          <button
            className=""
            onClick={() => {
              setMultiples([]);
              setEnableMultiSelection(!enableMultiSelection);
            }}
          >
            Enable {!enableMultiSelection ? "Multi" : "Single"} Selection
          </button>
        </div>
        {accordianData?.map((singleAccordian) => {
          return (
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(singleAccordian?.id)
                  : () => handleSingleSelection(singleAccordian?.id)
              }
              className="item"
            >
              <div className="acc-question">
                <h3>{singleAccordian?.question}</h3>
                <span>+</span>
              </div>
              {selected === singleAccordian?.id ||
              multiples.indexOf(singleAccordian?.id) !== -1 ? (
                <div>
                  <p>{singleAccordian?.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
