
import { useState, useEffect } from 'react';
import './index.css';

const ADMIN_PASSWORD = "1510dreamway1618";

export default function App() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem("dreamway-auth");
    if (saved === "true") setAuthorized(true);
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
      localStorage.setItem("dreamway-auth", "true");
    }
  };

  if (!authorized) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="p-6 rounded-xl bg-gray-800 space-y-4 shadow-md w-80">
          <h2 className="text-xl font-semibold">Вхід в адмінку</h2>
          <input
            type="password"
            placeholder="Введіть пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Увійти
          </button>
          {password && password !== ADMIN_PASSWORD && (
            <p className="text-red-400 text-sm">Невірний пароль</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">DreamWay Admin ✨</h1>
      <p>Адмін-панель доступна. Тут буде повний функціонал.</p>
    </div>
  );
}
