import "./style.css";

import React from "react";
import { Card } from "../card";

export const ListRender = ({ listTransactions, removeFromListTransaction }) => {
  return (
    <>
      <h2>Resumo Financeiro</h2>
      <ul>
        {listTransactions.map((transaction, index) => {
          return (
            <Card
              key={index}
              transaction={transaction}
              removeFromListTransaction={removeFromListTransaction}
            />
          );
        })}
      </ul>
    </>
  );
};
