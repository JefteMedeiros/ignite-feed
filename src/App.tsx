import React from "react";
import Header from "./components/Header";
import "./global.css";
import styles from "./app.module.css";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

const App: React.FC = () => {
  const posts = [
    {
      id: 2,
      author: {
        name: "Samuel Luiz",
        role: "Front-end Developer",
        avatar:
          "https://pps.whatsapp.net/v/t61.24694-24/147976775_1150159979107944_1217930821709761510_n.jpg?ccb=11-4&oh=6740c2c3242965bd4eb4a3a591416d5f&oe=62D8142D",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galera, tudo bom?",
        },
        {
          type: "paragraph",
          content:
            "Então, nessa publicação venho trazer minha página de tributo ao Olympique de Marseille, meu time do coração!",
        },
        {
          type: "paragraph",
          content:
            " A página foi feita com o intuito de contar alguns feitos e de fazer uma homenagem ao time, que eu amo. Espero que curtam!",
        },
        {
          type: "paragraph",
          content: "Link do projeto abaixo:",
        },
        {
          type: "link",
          content: "l.olympique.de.marseille.le.plus.grand.de.france.com",
        },
      ],
      publishedAt: new Date("2022-05-07"),
    },
    {
      id: 1,
      author: {
        name: "Julia Areal",
        role: "UI/UX Designer",
        avatar:
          "https://pps.whatsapp.net/v/t61.24694-24/216593520_1417252072047879_2365747145734127530_n.jpg?ccb=11-4&oh=01_AVytDU86oq69xPUpOU-HXa3nkdPPbx0Ss0NYw_NW1lsDcw&oe=62DE7BB3",
      },
      content: [
        {
          type: "paragraph",
          content: "Oiii, tudo bem pessoal?",
        },
        {
          type: "paragraph",
          content:
            "Então galera, hoje trouxe pra vocês meu mais novo protótipo no Figma! Trata-se de uma landing page para um salão de beleza, contendo características de design futurísticas e com foco em acessibilidade. Espero que gostem viu?",
        },
        {
          type: "paragraph",
          content: "Link do projeto abaixo:",
        },
        { type: "link", content: "projeto.salao.da.barbie/legal" },
      ],
      publishedAt: new Date("2022-06-07"),
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((e) => {
            return <Post key={e.id} post={e} />;
          })}
        </main>
      </div>
    </div>
  );
};

export default App;
