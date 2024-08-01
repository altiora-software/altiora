import { useState } from 'react';
import axios from 'axios';
import NewsCard from './newCard';
import { v4 as uuidv4 } from 'uuid';

const PopularTopics = ({ setBlogPosts }) => {
  const [news, setNews] = useState([]);
  const topics = [
    "Google", "Apple", "Android", "Microsoft", "Samsung", "Brasil",
    "Facebook", "IPhone", "WhatsApp", "Windows", "IOS", "Xiaomi",
    "Twitter", "Anatel", "Instagram", "Motorola", "Vivo", "Netflix",
    "TIM", "EUA"
  ];

  const fetchNews = async (topic) => {
    try {
      const response = await axios.get(`/api/news`, {
        params: { topic }
      });
      const articles = response.data.articles
        .slice(0, 10) // Mostrar solo 10 resultados
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .map(article => ({
          ...article,
          id: uuidv4() // Genera un identificador único para cada artículo
        }));
      setNews(articles);
      setBlogPosts(articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Temas Populares</h2>
      <div className="flex flex-wrap space-x-2 space-y-2">
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => fetchNews(topic.toLowerCase())}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;
