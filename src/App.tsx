import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=200",
      name: "Marco Polo",
      role: "Mercador / Embaixador",
    },
    content: [
      { type: "paragraph", content: "Não é o espelho quem denúncia a beleza,"},
      { type: "paragraph", content: "Ela está nos olhos do observador ! Não é a maciez da cama que determina o sono, mas a mente de quem dorme 😮‍💨"},
      { type: "link", content: "👉 marco.polo/embaixador.com"},
    ],
    publishedAt: new Date("2023-01-19 12:33:42"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
      name: "Paula Andradina",
      role: "Consultora de Marketing",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Captar a atenção de alguém e ser ouvido em meio a essa torrente de informações é o maior desafio do marketing contemporâneo. 🚀"},
      { type: "link", content: "👉 paula.marketing/consultoria.com"},
    ],
    publishedAt: new Date("2023-01-05 12:33:42"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post: any) => (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
