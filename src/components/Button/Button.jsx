import React from "react";
import "./style.css";

export function Button({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      Кнопка, которая на клик увеличивает значение Counter на 1
    </button>
  );
}
