import React from "react";
import styles from "./SimpleHeading.module.scss";

interface SimpleHeadingProps {
  text: string;
}

export const SimpleHeading: React.FC<SimpleHeadingProps> = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};
