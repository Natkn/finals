// src/app/page.tsx
"use client";

import Header from "@/app/components/header";
import Card from "@/app/components/card";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cardsData = [
    { id: 1, text: "Card 1: Fitness Training" },
    { id: 2, text: "Card 2: Healthy Diet Plans" },
    { id: 3, text: "Card 3: Yoga and Meditation" },
    { id: 4, text: "Card 4: Personal Coaching" },
    { id: 5, text: "Card 5: Community Support" },
  ];

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>
            Начните заниматься спортом <br /> и улучшите качество жизни
          </h1>
        </section>

        <section className={styles.cards}>
          <div className={styles.cardsRow}>
            {cardsData.slice(0, 3).map((card) => (
              <Card key={card.id} text={card.text} />
            ))}
          </div>
          <div className={styles.cardsRow}>
            {cardsData.slice(3).map((card) => (
              <Card key={card.id} text={card.text} />
            ))}
          </div>
        </section>

        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          Наверх
        </button>
      </main>
    </div>
  );
}
