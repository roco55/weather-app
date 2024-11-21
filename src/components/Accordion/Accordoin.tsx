import { useState } from "react";

import styles from "./css/Accordion.module.css";
import { ChevronDown } from "@icons/ChevronDown";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.question} onClick={() => setOpen(!open)}>
        {question}
        <ChevronDown className={open ? styles.open : styles.close} />
      </div>

      {open && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default Accordion;
