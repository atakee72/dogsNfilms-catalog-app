//still considering to publish this under another link in the navigation bar as a fetching showcase...

import React, { useState } from "react";

export default function ExcelFormula() {
  const [description, setDescription] = useState("");
  const [data, setData] = useState(null);
  const [dataExp, setDataExp] = useState(null);
  const [formula, setFormula] = useState("");

  //   console.log("🚀 ~ excelFormula ~ description:", description);

  async function getFormula() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "excel-ai-formula-generator.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://excel-ai-formula-generator.p.rapidapi.com/v0/generate?description=${description}`,
        options
      );
      const data = await response.json();
      console.log("🚀 ~ getFormula ~ data:", data);
      setData(data);
    } catch (err) {
      console.log("🚀 ~ getFormula ~ err:", err);
    }
  }

  async function getExplanation() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "51c56cf87bmsh690b7b5c4046e44p16b452jsnd442fe3cba2e",
        "X-RapidAPI-Host": "excel-ai-formula-generator.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://excel-ai-formula-generator.p.rapidapi.com/v0/explain?description=${formula}`,
        options
      );
      const d = await response.json();
      console.log("🚀 ~ getExplanation ~ dataExp:", dataExp);
      setDataExp(d);
    } catch (err) {
      console.log("🚀 ~ getExplanation ~ errEx:", err);
    }
  }

  return (
    <div className="text-white text-center p-5">
      <div>
        <h3 className="p-5">
          Tell AI what you want to do in Excel (or Google Sheets), submit, and
          get your formula to do what you aim to do:
        </h3>
        <input
          className="border text-black bg-slate-200 mx-5"
          type="text"
          onChange={(e) => {
            // e.preventDefault();
            setDescription(e.target.value);
          }}
        />
        <button className="border" onClick={getFormula}>
          Submit
        </button>{" "}
        <br />
        <div>
          Response will appear here: <br />
          <div className="m-5 p-5 text-slate-200">
            <i>{data && data?.response}</i>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <div>
        <h3 className="p-5">
          Or submit a formula and get the explanation for it:
        </h3>
        <input
          className="border text-black bg-slate-200 mx-5"
          type="text"
          onChange={(event) => {
            // event.preventDefault();
            setFormula(event.target.value);
          }}
        />
        <button className="border" onClick={getExplanation}>
          Submit
        </button>{" "}
        <br />
        <div>
          Response will appear here: <br />
          <div className="m-5 p-5 text-slate-200">
            <i>{dataExp && dataExp?.response}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
