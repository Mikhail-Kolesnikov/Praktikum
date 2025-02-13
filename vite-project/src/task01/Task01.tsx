import { useState } from "react";
import styles from "./Task01.module.css"; 
//import { TextField, LinearProgress } from "@mui/material"


export default function Task01() {
  const [progressScale, setProgressScale] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    
    value = value.replace(/\D/g, "");

    
    let num = Number(value);
    if (num > 100) num = 100;

    setProgressScale(num);
  };

  return (
    <div className={styles.progressContainer}>
      <input
        type="text"
        value={progressScale}
        onChange={handleChange}
        className={styles.progressInput}
      />
      <div className={styles.progressBar}>
        <div
          className={`${styles.progressFill} ${
            progressScale === 100
              ? styles.green
              : progressScale >= 50
              ? styles.yellow
              : styles.red
          }`}
          style={{ width: `${progressScale}%` }}
        ></div>
      </div>
    </div>
  );
}