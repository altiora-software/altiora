// components/NewsCard.jsx
import Link from 'next/link';

const NewsCard = ({ news }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={news.image} alt={news.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{news.title}</div>
        <p className="text-gray-700 text-base">{news.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{news.category}</span>
        <span className="inline-block text-gray-600 text-sm">{news.date}</span>
      </div>
      <div className="px-6 pb-4">
        <Link href={`/news/${news.id}`}> Read more </Link>
      </div>
    </div>
  );
};

export default NewsCard;
