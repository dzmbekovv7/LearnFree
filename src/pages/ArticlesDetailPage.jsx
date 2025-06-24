import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import Loading from '../components/Loading';
import './article.css'; // можно добавить сюда кастомные стили, если хочешь

const AshleyArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentArticles, setRecentArticles] = useState([]);
  const [lastUpdatedArticles, setLastUpdatedArticles] = useState([]);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase.from('lernfree_articles').select('*');
  
      if (!error && data) {
        // Вывести все значения поля 'type' из полученных записей
        const types = data.map(item => item.type);
        console.log('Значения поля type в таблице:', types);
  
        const found = data.find((a) => slugify(a.title) === slug);
        if (found) {
          setArticle(found);
  
          const sortedByDate = data.sort(
            (a, b) => new Date(b.published_date) - new Date(a.published_date)
          );
          setRecentArticles(sortedByDate.slice(0, 5));
  
          const sortedByUpdate = data
            .slice()
            .sort(
              (a, b) =>
                new Date(b.updated_at || b.published_date) -
                new Date(a.updated_at || a.published_date)
            );
          setLastUpdatedArticles(sortedByUpdate.slice(0, 5));
  
          const sorted = data.sort(
            (a, b) => new Date(a.published_date) - new Date(b.published_date)
          );
          const currentIndex = sorted.findIndex((a) => slugify(a.title) === slug);
  
          setPrevArticle(sorted[currentIndex - 1] || null);
          setNextArticle(sorted[currentIndex + 1] || null);
        }
      }
  
      setLoading(false);
    };
  
    fetchArticle();
  }, [slug]);
  
  

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !article) return;

    const newComment = {
      name,
      message,
      created_at: new Date().toISOString(),
    };

    const updatedComments = article.comments
      ? [...article.comments, newComment]
      : [newComment];

    const { error } = await supabase
    .from('lernfree_articles')
    .update({ comments: updatedComments })
      .eq('id', article.id);

    if (!error) {
      setArticle((prev) => ({ ...prev, comments: updatedComments }));
      setName('');
      setMessage('');
    }
  };

  const keywords = [
    'Frontend Development',
    'Backend Development',
    'Mobile Development',
    'Machine Learning',
  ];

  if (loading) return <Loading />;
  if (!article) return <p>Article not found</p>;

  function addClassToLinks(html) {
    if (!html) return '';

    return html.replace(/<a /g, '<a class="custom-link" ');
  }

  const customMarkdown = (content) => {
    if (!content) return '';

    let html = content
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-size: 30px; font-weight: 700;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
      )
      .replace(/<img>(.*?)<\/img>/g, '<img src="$1" style="width: 70%; height: 100%" loading="lazy" class="article-image-content" />')
      .split('\n')
      .map((line) => (line.trim() === '' ? '<br/>' : `<p>${line}</p>`))
      .join('');

    return addClassToLinks(html);
  };

  return (
    <div className="min-h-screen bg-white text-blue-900 px-6 py-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">

        {/* Контент статьи слева */}
        <main className="md:col-span-2 space-y-10">

          {/* Заголовок и изображение сбоку */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={article.image}
              alt={article.title}
              className="w-full md:w-1/2 rounded-lg object-cover border border-blue-600 shadow-lg"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-3xl font-extrabold mb-4">{article.title}</h1>
              <div className="text-sm text-blue-700 space-y-1">
                <p>🕒 {article.reading_time} min read</p>
                <p>📅 {new Date(article.published_date).toLocaleDateString()}</p>
                <p>✍️ {article.author}</p>
              </div>
            </div>
          </div>

          {/* Статья как колонки */}
          <article className="columns-1 md:columns-2 gap-8 space-y-6 leading-relaxed text-lg">
            <div
              dangerouslySetInnerHTML={{ __html: customMarkdown(article.summary) }}
            />
                 <div
              dangerouslySetInnerHTML={{ __html: customMarkdown(article.contentDetails) }}
            />
          </article>

          {/* Карусель навигации */}
          <div className="flex justify-between items-center mt-12 text-blue-700 font-semibold">
            {prevArticle ? (
              <Link to={`/articles/${slugify(prevArticle.title)}`} className="hover:underline">
                ← {prevArticle.title}
              </Link>
            ) : <span />}
            {nextArticle ? (
              <Link to={`/articles/${slugify(nextArticle.title)}`} className="hover:underline">
                {nextArticle.title} →
              </Link>
            ) : <span />}
          </div>

          {/* Комментарии в аккордеоне */}
          <details className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-300 shadow-sm">
            <summary className="text-xl font-semibold cursor-pointer text-blue-700">💬 Comments</summary>
            <div className="mt-4 space-y-6">
              {article.comments?.length ? (
                article.comments.map((c, i) => (
                  <div key={i} className="border-b border-blue-200 pb-3">
                    <p className="font-semibold text-blue-800">{c.name}</p>
                    <p className="text-blue-700">{c.message}</p>
                    <time className="text-xs text-blue-400">{new Date(c.created_at).toLocaleString()}</time>
                  </div>
                ))
              ) : (
                <p className="text-blue-400">No comments yet.</p>
              )}

              <form onSubmit={handleCommentSubmit} className="space-y-4 mt-6">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-blue-100 border border-blue-400 rounded px-4 py-2 text-blue-900 placeholder-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your comment"
                  rows="3"
                  className="w-full bg-blue-100 border border-blue-400 rounded px-4 py-2 text-blue-900 placeholder-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </details>
        </main>

        {/* Боковая панель */}
        <aside className="space-y-8">
          <div className="bg-blue-50 rounded-lg p-4 shadow-md border border-blue-200">
            <h2 className="text-blue-700 font-semibold text-lg mb-4">📌 Recent Articles</h2>
            <ul className="space-y-3">
              {recentArticles.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/articles/${slugify(item.title)}`}
                    className="block hover:text-blue-500"
                  >
                    <h4 className="font-medium">{item.title}</h4>
                    <time className="text-xs text-blue-400">
                      {new Date(item.published_date).toLocaleDateString()}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 shadow-md border border-blue-200">
            <h2 className="text-blue-700 font-semibold text-lg mb-4">🔁 Recently Updated</h2>
            <ul className="space-y-3">
              {lastUpdatedArticles.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/articles/${slugify(item.title)}`}
                    className="block hover:text-blue-500"
                  >
                    <h4 className="font-medium">{item.title}</h4>
                    <time className="text-xs text-blue-400">
                      {new Date(item.updated_at || item.published_date).toLocaleDateString()}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <section className="bg-blue-100 rounded-3xl p-6 shadow-md border border-blue-300">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Keywords</h3>
            <div className="flex flex-wrap gap-3">
              {keywords.map((word) => (
                <Link
                  key={word}
                  to={`/type/${encodeURIComponent(word)}`}
                  className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  {word}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default AshleyArticleDetailPage;
