import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Footer from '../components/footer';
import NewsCard from '../components/newCard';
import PopularTopics from '../components/popularTopics';

const BlogPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 segundos

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news', {
          params: {
            country: 'ar',
            category: 'technology',
            pageSize: 10,
          }
        });
        const articles = response.data.articles
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          .map((article, index) => ({
            ...article,
            id: index // Genera un identificador único para cada artículo
          }));
        
        setBlogPosts(articles);

        // Calcular las 10 noticias más populares
        const topArticles = articles.slice(0, 10); // Ejemplo de criterio de popularidad
        setTopNews(topArticles);

      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Navbar />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="p-8 bg-white rounded-lg shadow-lg text-center w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Publica tus anuncios</h2>
            <img
              src="./public/img-logo/AltioraSloganFondoOscuro.png" // Reemplaza con la ruta correcta de tu imagen
              alt="Ejemplo de anuncio"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="mb-4 text-lg">
              Aprovecha nuestra plataforma para llegar a más clientes con anuncios innovadores y efectivos.
            </p>
            <p className="mb-4 text-lg">
              <strong>Planes:</strong>
              <ul className="list-disc list-inside text-left">
                <li>Plan Básico: Incluye...</li>
                <li>Plan Estándar: Incluye...</li>
                <li>Plan Premium: Incluye...</li>
              </ul>
            </p>
            <p className="mb-4 text-lg">
              <strong>Cómo se vería tu anuncio:</strong>
            </p>
            <div className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold">Título del Anuncio</h3>
              <p>Descripción breve del anuncio que capte la atención de los clientes potenciales.</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cerrar
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Anunciar
              </button>
            </div>
          </div>
        </div>
      )}
      <Container>
          <h1 className="text-4xl font-bold text-center my-8">Blog de Marketing</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.slice(0, 6).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Top 10 Noticias Populares</h2>
            {topNews.map((news, index) => (
              <div key={news.id} className="flex items-center space-x-2 p-2 bg-gray-200 rounded-lg mb-2">
                <span className={`text-${index % 2 === 0 ? "blue" : "green"}-500 font-bold`}>
                  {index + 1}
                </span>
                <a 
                  href={news.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:underline truncate" 
                  style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {news.title}
                </a>
              </div>
            ))}
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.slice(6, 14).map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        <PopularTopics setBlogPosts={setBlogPosts} />
      </Container>
      <Footer />
    </div>
  );
};

export default BlogPage;