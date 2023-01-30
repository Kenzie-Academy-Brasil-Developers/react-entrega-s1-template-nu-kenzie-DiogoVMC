import React from "react";
import { EmptyTemplate } from "../EmptyTemplate";
import { ListRender } from "../ListRender";

export const List = ({ listTransactions, removeFromListTransaction }) => {
  return (
    <div className="list">
      {listTransactions.length > 0 ? (
        <ListRender
          listTransactions={listTransactions}
          removeFromListTransaction={removeFromListTransaction}
        />
      ) : (
        <div className="empty-container">
          <h3> Resumo financeiro </h3>
          <h2> Você ainda não possui nenhum lançamento </h2>
          <EmptyTemplate />
          <EmptyTemplate />
          <EmptyTemplate />
        </div>
      )}
    </div>
  );
};
