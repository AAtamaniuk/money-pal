import React from "react";
import MoneyForm from "./MoneyForm";

const EditMoneyPage = () => (
  <div>
    <h1>Edit money record</h1>
    <MoneyForm
      onSubmit={() => {
        console.log("submit");
      }}
    />
  </div>
);

EditMoneyPage.propTypes = {};

export default EditMoneyPage;
