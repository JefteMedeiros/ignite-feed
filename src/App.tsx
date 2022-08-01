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
        "https://github.com/samluiz.png"
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
        name: "Geovana Bezerra",
        role: "UI/UX Designer",
        avatar:
        "https://pps.whatsapp.net/v/t61.24694-24/294262285_602689631266080_100385617173168283_n.jpg?ccb=11-4&oh=01_AVxdhgXZ8EwLlFG3g3DWSqJhZtMDYtOeITt3ZQFuw8tAiw&oe=62F62AB6",
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
