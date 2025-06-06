import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import Loading from '../components/Loading'

const CategoryArticlesPage = () => {
  const { typename } = useParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
      .from('lernfree_articles')
      .select('*')
        .eq('type', typename)
        .order('published_date', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setArticles(data)
      }
      setLoading(false)
    }

    fetchArticles()
  }, [typename])

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12 uppercase tracking-wide">
          {typename.replace(/-/g, ' ')}
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Нет статей по теме «{typename}»
          </p>
        ) : (
          <div className="flex flex-col gap-10">
            {articles.map(article => (
              <Link
                key={article.id}
                to={`/articles/${slugify(article.title)}`}
                className="flex flex-col md:flex-row bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl"
              >
                {/* Картинка слева */}
                <div className="md:w-1/3 overflow-hidden relative group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Плавный затемнённый оверлей при наведении */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Текст справа */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed line-clamp-5">
                      {article.summary.length > 200
                        ? article.summary.slice(0, 200) + "..."
                        : article.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-between items-center text-gray-500 text-sm font-medium">
                    <time dateTime={article.published_date}>
                      {new Date(article.published_date).toLocaleDateString()}
                    </time>
                    <div className="flex items-center gap-4">
                      <img
                        src={article.avatar}
                        alt={article.author}
                        className="w-10 h-10 rounded-full border border-gray-300"
                      />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryArticlesPage
