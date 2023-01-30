import React from "react";
import { useState } from "react";
import "./Form.css";

export const Form = ({ listTransactions, addToListTransactions }) => {
  const [formData, setFormData] = useState({
    description: "",
    type: "Entrada",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    if (formData.description !== "" && formData.value !== "") {
      addToListTransactions(formData);
    } else {
      alert("Preencha os campos");
    }
    setFormData({
      description: "",
      type: "Entrada",
      value: "",
    });
  };

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="" className="description">
        Descrição
      </label>
      <input
        type="text"
        className="input-description"
        placeholder="Digite aqui sua descrição"
        value={formData.description}
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
      />
      <span className="description-example">Ex: Compra de roupas</span>
      <div className="value-container">
        <div className="value">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            value={formData.value}
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
          />
          <span>R$</span>
        </div>
        <div className="value-type">
          <label htmlFor="">Tipo de Valor </label>
          <select name="value-type" id="values">
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saida</option>
          </select>
        </div>
      </div>
      <button className="submit">Inserir valor</button>
    </form>
  );
};
