import { Form } from "./components/Form/Form.jsx";
import React, { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { List } from "./components/List/index.jsx";

export const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const addToListTransactions = (transaction) => {
    const newTransaction = { ...transaction, id: uuidv4() };
    console.log(newTransaction);
    setListTransactions([...listTransactions, newTransaction]);
  };

  const removeFromListTransaction = (id) => {
    const newTransactionList = listTransactions.filter(
      (transaction) => transaction.id !== id
    );
    setListTransactions(newTransactionList);
  };

  return (
    <>
      <header>
        <p>
          Nu <span className="logo-kenzie"> Kenzie </span>
        </p>
        <button> Inicio </button>
      </header>
      <main>
        <Form
          listTransactions={listTransactions}
          addToListTransactions={addToListTransactions}
        />
        <List
          listTransactions={listTransactions}
          removeFromListTransaction={removeFromListTransaction}
        />
      </main>
    </>
  );
};
