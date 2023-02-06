import React, { useState } from "react";
import "./style.css";

export const Sum = ({ listTransactions }) => {
  console.log(listTransactions);
  const total = listTransactions.reduce((acc, transaction) => {
    if (transaction.type == "Entrada") {
      return acc + parseInt(transaction.value);
    } else {
      return acc - parseInt(transaction.value);
    }
  }, 0);
  return (
    <>
      {listTransactions.length > 0 ? (
        <div className="totalContainer">
          <h2>
            Valor Total{" "}
            <span className="valueTotal"> R$ {total.toFixed(2)} </span>
          </h2>
          <p>O valor se refere ao saldo</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
