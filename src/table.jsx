import { useState } from "react";
import React from "react";
import ColorPicker from "react-color-picker";
import "react-color-picker/index.css";

const Table = () => {
  const options = [
    { label: " ", value: "Select Active Theme" },
    { label: "Dawn", value: "Dawn" },
    { label: "Debut", value: "Debut" },
    { label: "Minimal", value: "Minimal" },
    { label: "Editions", value: "Editions" },
    { label: "Narrative", value: "Narrative" },
    { label: "Simple", value: "Simple" },
    { label: "Supply", value: "Supply" },
    { label: "Boundless", value: "Boundless" },
    { label: "Impulse 5.0", value: "Impulse 0" },
    { label: "Brooklyn", value: "Brooklyn" },
  ];

  const counterOption = [
    { label: "None", value: "None" },
    {
      label: "Numeric",
      value: "Numeric",
    },
    { label: "Bullet", value: "Bullet" },
  ];
  const positionOption = [
    { label: "Top", value: "Top" },
    {
      label: "Right before First Heading",
      value: "Right before First Heading",
    },
    { label: "Right after First Heading", value: "Right after First Heading" },
  ];
  const indentionOption = [
    { label: "Indention", value: "Indention" },
    { label: "No Indention", value: "No Indention" },
  ];

  const [color, setColor] = useState("red");

  const [theme, setTheme] = useState(" ");
  const [indention, setIndention] = useState(" ");
  const [position, setPosition] = useState(" ");
  const [counter, setCounter] = useState(" ");

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);
  const [checkedSix, setCheckedSix] = useState(false);

  const [checkedScroll, setCheckedScroll] = useState(false);

  const handletheme = (e) => {
    console.log("fruits changed", e.target.value);
    setTheme(e.target.value);
  };
  const handleindention = (e) => {
    setIndention(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleCounter = (e) => {
    setCounter(e.target.value);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input
          className="text-xl m-2"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        {label}
      </label>
    );
  };
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };
  const handleChangeFour = () => {
    setCheckedFour(!checkedFour);
  };
  const handleChangeFive = () => {
    setCheckedFive(!checkedFive);
  };
  const handleChangeSix = () => {
    setCheckedSix(!checkedSix);
  };
  const handleChangeScroll = () => {
    setCheckedScroll(!checkedScroll);
  };

  const onDrag = (color, c) => {
    setColor(color);
  };

  return (
    <form className="container bg-[#F6F6F7] p-5">
      {/* theme */}
      <div className="theme-container flex justify-center items-center m-5  max-[720px]:flex-wrap ">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">
            Select Active Theme
          </h2>
          <p className=" text-sm text-[#6D7175]">
            Please reinstall the app & update theme name if you have changes
            theme
          </p>
        </div>
        <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded">
          <select
            value={theme}
            onChange={handletheme}
            className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Checkbox */}
      <div className="checkbox-container flex justify-center items-center m-5 max-[720px]:flex-wrap">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">Headings</h2>
          <p className=" text-sm text-[#6D7175]">
            Select which Headings you would like to display in your Table of
            Contents.
          </p>
        </div>
        <div className="checkbox flex flex-col items-start max-[720px]:items-center justify-between w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded ">
          <Checkbox label="H1" value={checkedOne} onChange={handleChangeOne} />
          <Checkbox label="H2" value={checkedTwo} onChange={handleChangeTwo} />
          <Checkbox
            label="H3"
            value={checkedThree}
            onChange={handleChangeThree}
          />
          <Checkbox
            label="H4"
            value={checkedFour}
            onChange={handleChangeFour}
          />
          <Checkbox
            label="H5"
            value={checkedFive}
            onChange={handleChangeFive}
          />
          <Checkbox label="H6" value={checkedSix} onChange={handleChangeSix} />
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Scroll   */}
      <div className="counter-container flex justify-center items-center m-5 max-[720px]:flex-wrap">
        <div className="text-left w-1/2  max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">
            Scroll Settings
          </h2>
        </div>
        <div className="select-container w-1/2  max-[720px]:w-full bg-white shadow-lg p-5 ">
          <label>
            <Checkbox
              label="Smooth Scroll"
              value={checkedScroll}
              onChange={handleChangeScroll}
            />
          </label>
          <label>
            <p className=" text-left p-1"> Scroll Offset</p>
            <input
              className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
              type="text"
              name="name"
            />
          </label>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Articles  */}
      <div className="counter-container flex justify-center items-center m-5 max-[720px]:flex-wrap text-center">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">
            Articles Out Of Table Of Content (ID)
          </h2>
        </div>
        <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded ">
          <label>
            <p className=" text-left p-1"> Out Of Table Of Contents</p>
            <input
              className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
              type="text"
              name="name"
            />
          </label>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* header */}
      <div className="counter-container flex justify-center items-center m-5 max-[720px]:flex-wrap">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">
            Table Of Content Header
          </h2>
        </div>
        <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded">
          <input
            className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
            type="text"
            name="name"
          />
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Counter */}
      <div className="counter-container flex justify-center items-center m-5 max-[720px]:flex-wrap">
        <div className="text-left w-1/2 max-[720px]:w-full  pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">Counter</h2>
        </div>
        <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded">
          <select
            value={counter}
            onChange={handleCounter}
            className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
          >
            {counterOption.map((counter) => (
              <option key={counter.value} value={counter.value}>
                {counter.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* Position */}
      <div className="position-container flex justify-center items-center m-5 max-[720px]:flex-wrap">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">Position</h2>
          <p className=" text-sm text-[#6D7175]">Default is absolute top</p>
        </div>
        <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded">
          <select
            value={position}
            onChange={handlePosition}
            className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
          >
            {positionOption.map((position) => (
              <option key={position.value} value={position.value}>
                {position.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* indention */}
      <div className="indention-container flex max-[720px]:flex-wrap justify-center items-center m-5">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">
            Indentation
          </h2>
          <p className=" text-sm text-[#6D7175]">Default is indentation</p>
        </div>
        <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded">
          <select
            value={indention}
            onChange={handleindention}
            className="w-full p-2 bg-white border border-[rgba(201,204,207,1)] shadow rounded"
          >
            {indentionOption.map((indention) => (
              <option key={indention.value} value={indention.value}>
                {indention.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {/* color-Picker */}
      <div className="colorPicker-container flex max-[720px]:flex-wrap justify-center items-center m-5">
        <div className="text-left w-1/2 max-[720px]:w-full pl-9 ml-14 my-5">
          <h2 className=" text-base text-[#202223] font-semibold">
            Design Theme
          </h2>
          <p className=" text-sm text-[#6D7175]">
            The theme is only applied to the table of contents which is auto
            inserted into the post. The Table of Contents widget will inherit
            the theme widget styles.
          </p>
        </div>
        {/* <div className="select-container w-1/2 max-[720px]:w-full bg-white shadow-lg p-4 rounded">
          <div>
            <ColorPicker value={color} onDrag={onDrag} />
            <div
              style={{
                background: color,
                width: 100,
                height: 50,
                color: "white",
              }}
            >
              {color}
            </div>
          </div>
        </div> */}
      </div>
      <br />
      <hr />
      <br />
      <button
        type="submit"
        className=" bg-[#006E52] p-3 text-white text-sm rounded ml-20"
      >
        Save
      </button>
    </form>
  );
};

export default Table;
