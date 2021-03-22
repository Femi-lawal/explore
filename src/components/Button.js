import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
};
