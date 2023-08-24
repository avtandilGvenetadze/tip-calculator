import "./allInput.css";
import { useState, useEffect } from "react";

function AllInput(props) {
  let arrayofNumbers = [5, 10, 15, 25, 50];

  const [billInputValue, setbillInputValue] = useState("");
  const [numberOfpeopleValue, setnumberOfpeopleValue] = useState("");
  const [persentageNumber, setPersentageNumber] = useState("");
  const [customPlaceHolder, setCustomPlaceHolder] = useState("");

  useEffect(() => {
    if (billInputValue.slice(0, 1) == "0" || billInputValue.slice(0, 1) == "") {
      return;
    }
    if (
      numberOfpeopleValue.slice(0, 1) == "0" ||
      numberOfpeopleValue.slice(0, 1) == ""
    ) {
      return;
    }
    props.setTip(
      ((Number(billInputValue) / 100) * Number(persentageNumber)) /
        Number(numberOfpeopleValue)
    );
    props.setTotal(
      (Number(billInputValue) +
        (Number(billInputValue) / 100) * Number(persentageNumber)) /
        Number(numberOfpeopleValue)
    );
  }, [billInputValue, numberOfpeopleValue, persentageNumber]);

  useEffect(() => {
    setbillInputValue("");
    setnumberOfpeopleValue("");
    setPersentageNumber("");
    setCustomPlaceHolder("");
    props.setTip(0);
    props.setTotal(0);
  }, [props.reset]);

  return (
    <div className="inputs-wrapper">
      <img className="icon-dollar" src="./images/icon-dollar.svg"></img>
      <label className="bill-label"> Bill </label>
      <p
        className="eror"
        style={billInputValue.slice(0, 1) == "0" ? { display: "inline" } : {}}
      >
        Can’t be zero
      </p>
      <input
        min={1}
        max={9999}
        type="number"
        className="Bill-input"
        placeholder="0"
        value={billInputValue}
        onChange={(event) => {
          return event.target.value <= 9999
            ? setbillInputValue(event.target.value)
            : "";
        }}
      ></input>
      <label className="Select-Tip-label">Select Tip %</label>
      <div className="percentage-buttons-wrapper">
        {arrayofNumbers.map((number) => {
          return (
            <button
              className="persentage-button"
              key={number}
              onClick={() => {
                setPersentageNumber(number);
                setCustomPlaceHolder("");
              }}
              style={
                number == persentageNumber ? { background: "#26C2AE" } : {}
              }
            >
              {number + "%"}
            </button>
          );
        })}
        <input
          value={customPlaceHolder}
          placeholder="Custom"
          className="Custom"
          onChange={(event) => {
            setPersentageNumber(event.target.value);
            setCustomPlaceHolder(event.target.value);
          }}
        ></input>
      </div>
      <div className="NumberofPeople-wrapper">
        <label className="NumberofPeople-label">Number of People</label>
        <p
          className="eror"
          style={
            numberOfpeopleValue.slice(0, 1) == "0" ? { display: "inline" } : {}
          }
        >
          Can’t be zero
        </p>
        <img className="person-icon" src="./images/icon-person.svg "></img>
        <input
          value={numberOfpeopleValue}
          onChange={(event) => setnumberOfpeopleValue(event.target.value)}
          placeholder="0"
          className="NumberofPeople-input"
          type="number"
        ></input>
      </div>
    </div>
  );
}

export default AllInput;
