
import { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    date: '2025-06-14',
    topic: 'Вайб кодинг',
    prompt: 'Згенеруй пост у стилі DreamWay AI про вайб кодинг',
    text: '',
    image: '',
    status: 'Очікує',
  },
];

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const updatePost = (id, field, value) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, [field]: value } : post
      )
    );
  };

  const publishPost = (id) => {
    alert('Пост буде опубліковано в Telegram (логіка додається)');
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, status: 'Опубліковано' } : post
      )
    );
  };

  return (
    <div className="p-6 grid gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
          <div className="flex gap-4">
            <input
              type="date"
              value={post.date}
              onChange={(e) => updatePost(post.id, 'date', e.target.value)}
              className="flex-1 p-2 rounded bg-gray-900 border border-gray-700"
            />
            <input
              placeholder="Тема поста"
              value={post.topic}
              onChange={(e) => updatePost(post.id, 'topic', e.target.value)}
              className="flex-1 p-2 rounded bg-gray-900 border border-gray-700"
            />
            <input
              placeholder="Посилання на зображення"
              value={post.image}
              onChange={(e) => updatePost(post.id, 'image', e.target.value)}
              className="flex-1 p-2 rounded bg-gray-900 border border-gray-700"
            />
          </div>
          <textarea
            placeholder="GPT-промт"
            value={post.prompt}
            onChange={(e) => updatePost(post.id, 'prompt', e.target.value)}
            className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          />
          <textarea
            placeholder="Текст поста"
            value={post.text}
            onChange={(e) => updatePost(post.id, 'text', e.target.value)}
            className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Статус: {post.status}</span>
            <button
              onClick={() => publishPost(post.id)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            >
              Опублікувати
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
