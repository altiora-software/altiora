// pages/blog.jsx
import NewsCard from '../components/newCard';

const blogPosts = [
    {
      id: 1,
      title: 'La Importancia del Marketing Digital en 2024',
      description: 'Descubre por qué el marketing digital es crucial para el éxito de tu negocio este año.',
      content: 'Contenido completo de la noticia sobre la importancia del marketing digital en 2024...',
      category: 'Marketing Digital',
      date: '2024-07-29',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 2,
      title: 'Cómo SEO Puede Transformar Tu Sitio Web',
      description: 'Aprende cómo las técnicas de SEO pueden aumentar el tráfico de tu sitio web.',
      content: 'Contenido completo de la noticia sobre cómo SEO puede transformar tu sitio web...',
      category: 'SEO',
      date: '2024-07-28',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 3,
      title: 'Estrategias de ADS para Pequeñas Empresas',
      description: 'Conoce las mejores estrategias de publicidad para pequeñas empresas.',
      content: 'Contenido completo de la noticia sobre estrategias de ADS para pequeñas empresas...',
      category: 'ADS',
      date: '2024-07-27',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 4,
      title: 'Beneficios de un Sitio Web Personalizado',
      description: 'Descubre los beneficios de tener un sitio web personalizado para tu negocio.',
      content: 'Contenido completo de la noticia sobre los beneficios de un sitio web personalizado...',
      category: 'Sitios Web',
      date: '2024-07-26',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 5,
      title: 'Tendencias de Marketing Digital en 2024',
      description: 'Explora las tendencias más importantes en marketing digital para este año.',
      content: 'Contenido completo de la noticia sobre las tendencias de marketing digital en 2024...',
      category: 'Marketing Digital',
      date: '2024-07-25',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 6,
      title: 'La Relevancia del Contenido de Calidad en SEO',
      description: 'Entiende por qué el contenido de calidad es esencial para el SEO.',
      content: 'Contenido completo de la noticia sobre la relevancia del contenido de calidad en SEO...',
      category: 'SEO',
      date: '2024-07-24',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 7,
      title: 'Optimización de ADS para Maximizar Conversiones',
      description: 'Aprende a optimizar tus anuncios para obtener más conversiones.',
      content: 'Contenido completo de la noticia sobre la optimización de ADS para maximizar conversiones...',
      category: 'ADS',
      date: '2024-07-23',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 8,
      title: 'Casos de Éxito en Marketing Digital',
      description: 'Conoce algunos casos de éxito en marketing digital y cómo lograron resultados sorprendentes.',
      content: 'Contenido completo de la noticia sobre casos de éxito en marketing digital...',
      category: 'Marketing Digital',
      date: '2024-07-22',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 9,
      title: 'Diferencias Entre Sitios Web Genéricos y Personalizados',
      description: 'Aprende las diferencias clave entre un sitio web genérico y uno personalizado.',
      content: 'Contenido completo de la noticia sobre las diferencias entre sitios web genéricos y personalizados...',
      category: 'Sitios Web',
      date: '2024-07-21',
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: 10,
      title: 'Cómo Integrar Estrategias de Marketing Digital en tu Negocio',
      description: 'Descubre cómo puedes integrar efectivamente estrategias de marketing digital en tu negocio.',
      content: 'Contenido completo de la noticia sobre cómo integrar estrategias de marketing digital en tu negocio...',
      category: 'Marketing Digital',
      date: '2024-07-20',
      image: 'https://via.placeholder.com/600x400'
    }
  ];
  

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Blog de Marketing</h1>
      <div className="flex flex-wrap justify-center">
        {blogPosts.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
