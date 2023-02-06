import { Form } from "./components/Form/Form.jsx";
import React, { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { List } from "./components/List/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { Sum } from "./components/Total/index.jsx";

export const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const addToListTransactions = (transaction) => {
    const newTransaction = { ...transaction, id: uuidv4() };
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
      <Header />
      <main>
        <div className="left-container">
          <Form
            listTransactions={listTransactions}
            addToListTransactions={addToListTransactions}
          />
          <Sum listTransactions={listTransactions} />
        </div>

        <List
          listTransactions={listTransactions}
          removeFromListTransaction={removeFromListTransaction}
        />
      </main>
    </>
  );
};
