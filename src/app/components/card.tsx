// src/components/Card.tsx
import React from "react";
import styles from "@/styles/Home.module.css";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className={styles.card}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
