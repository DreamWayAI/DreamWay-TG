
import { useState } from "react";
import './App.css';

const initialPosts = [
  {
    id: 1,
    date: "2025-06-14",
    topic: "Вайб кодинг",
    prompt: "Згенеруй пост у стилі DreamWay AI про вайб кодинг",
    text: "",
    image: "",
    status: "Очікує",
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const updatePost = (id, field, value) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, [field]: value } : post
      )
    );
  };

  const publishPost = (id) => {
    alert("Пост буде опубліковано в Telegram (логіка додається)");
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, status: "Опубліковано" } : post
      )
    );
  };

  return (
    <div className="app">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="row">
            <input
              type="date"
              value={post.date}
              onChange={(e) => updatePost(post.id, "date", e.target.value)}
            />
            <input
              placeholder="Тема поста"
              value={post.topic}
              onChange={(e) => updatePost(post.id, "topic", e.target.value)}
            />
            <input
              placeholder="Посилання на зображення"
              value={post.image}
              onChange={(e) => updatePost(post.id, "image", e.target.value)}
            />
          </div>
          <textarea
            placeholder="GPT-промт"
            value={post.prompt}
            onChange={(e) => updatePost(post.id, "prompt", e.target.value)}
          />
          <textarea
            placeholder="Текст поста"
            value={post.text}
            onChange={(e) => updatePost(post.id, "text", e.target.value)}
          />
          <div className="row">
            <span>Статус: {post.status}</span>
            <button onClick={() => publishPost(post.id)}>Опублікувати</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
