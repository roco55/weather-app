import Accordion from "@components/Accordion/Accordoin";
import styles from "./css/FAQ.module.css";

const QuestionCards = [
  {
    name: "Question 1",
    answer:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  },
  {
    name: "Question 2",
    answer:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  },
  {
    name: "Question 3",
    answer:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  },
  {
    name: "Question 4",
    answer:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
  },
];

export const FAQ = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.questions}>
        {QuestionCards.map((props, idx) => (
          <Accordion
            question={props.name}
            answer={props.answer}
            key={idx}
          ></Accordion>
        ))}
      </div>
    </div>
  );
};
