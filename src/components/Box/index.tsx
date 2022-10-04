import React from "react";
import styles from "./box.module.scss"
type Props = {
  children: React.ReactNode;
};

const Box = ({ children }: Props) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
