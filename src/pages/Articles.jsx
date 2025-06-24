import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

const DogsTrainingPage = () => {
  const [articles, setArticles] = useState([])
  const [visibleCount, setVisibleCount] = useState(9)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('newest')

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('lernfree_articles')
        .select('*')
        .order('published_date', { ascending: false })

      if (error) setError(error.message)
      else setArticles(data)
      setLoading(false)
    }
    fetchArticles()
  }, [])

  const handleShowMore = () => setVisibleCount(prev => prev + 9)

  const slugify = text =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

  const filteredArticles = articles
    .filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (filter === 'newest') return new Date(b.published_date) - new Date(a.published_date)
      if (filter === 'oldest') return new Date(a.published_date) - new Date(b.published_date)
      if (filter === 'popular') return b.reading_time - a.reading_time
      return 0
    })

  const cardBgColors = ['#E3F6F5', '#FCEADE', '#F0EFEB']

  const Card = ({ article, size }) => {
    // size: 'large' | 'medium' | 'small'
    const sizeClasses = {
      large: 'h-96',
      medium: 'h-72',
      small: 'h-56',
    }
    const randomBg = cardBgColors[article.id % cardBgColors.length]

    return (
      <Link
        to={`/articles/${slugify(article.title)}`}
        className={`relative rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105
          flex flex-col bg-white text-gray-900 ${sizeClasses[size]} `}
        style={{ backgroundColor: randomBg, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
      >
        <div className="flex-grow overflow-hidden rounded-t-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col gap-3">
          <h3 className="text-xl font-extrabold tracking-tight line-clamp-2">{article.title}</h3>
          <p className="text-sm text-gray-700 line-clamp-3">{article.summary}</p>
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={article.avatar}
              alt={article.author}
              className="w-10 h-10 rounded-full border border-gray-300"
              loading="lazy"
            />
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-xs text-gray-500">⏱ {article.reading_time}</p>
              <p className="text-xs text-gray-400">{new Date(article.published_date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // Разбиваем на группы по 3, где 1 большая слева и 2 маленькие справа
  // Если меньше 3 — просто выводим по одному medium размеру
  const renderArticleGroups = () => {
    const groups = []
    for (let i = 0; i < filteredArticles.length && i < visibleCount; i += 3) {
      groups.push(filteredArticles.slice(i, i + 3))
    }

    return groups.map((group, idx) => {
      if (group.length === 3) {
        return (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            style={{ minHeight: '26rem' }} // чтобы блок не прыгал по высоте
          >
            {/* Большая карточка слева */}
            <div className="md:col-span-2">
              <Card article={group[0]} size="large" />
            </div>
            {/* Две маленькие карточки справа, вертикально */}
            <div className="flex flex-col gap-6">
              <Card article={group[1]} size="small" />
              <Card article={group[2]} size="small" />
            </div>
          </div>
        )
      } else {
        // Если меньше 3, выводим по среднему размеру
        return (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
          >
            {group.map(article => (
              <Card key={article.id} article={article} size="medium" />
            ))}
          </div>
        )
      }
    })
  }

  if (loading) return <Loading />
  if (error) return <div className="text-red-600 font-bold text-center mt-10">{error}</div>

  return (
    <div className="min-h-screen px-5 md:px-10 py-10 bg-white text-gray-900">
      <header className="mb-14 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">
          Welcome to DevPulse — Your IT Insight Hub
        </h1>
        <p className="text-indigo-600 italic text-lg">
          Latest trends, tutorials, and stories from the tech universe.
        </p>
      </header>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-10 px-4">
        <input
          type="search"
          placeholder="Search articles by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-grow border border-indigo-500 rounded-lg px-5 py-3 text-gray-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-700"
          autoComplete="off"
        />

        <button
          onClick={() => setFilter(prev => (prev === 'newest' ? 'oldest' : 'newest'))}
          aria-label="Toggle sort order"
          className={`flex items-center gap-2 rounded-lg border-2 px-5 py-3 font-semibold transition-colors
            ${
              filter === 'newest'
                ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-white border-indigo-600 text-indigo-600 hover:bg-indigo-100'
            }`}
        >
          {filter === 'newest' ? 'Sort: Newest ↑' : 'Sort: Oldest ↓'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {filter === 'newest' ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Основной блок с группами */}
      <section className="max-w-7xl mx-auto px-4">
        {renderArticleGroups()}
      </section>

      {visibleCount < filteredArticles.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleShowMore}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  )
}

export default DogsTrainingPage
