import dayjs from 'dayjs'
import TrendingTopicsWidget from './components/widgets/TrendingTopicsWidget'
import { fetchTrendingTopicStats } from './lib/stats'

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const range = searchParams['range'] as string
  const trendingTopicsStats = await fetchTrendingTopicStats(range)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <TrendingTopicsWidget
          stats={trendingTopicsStats.map((stat) => {
            return {
              ...stat,
              trend_date: dayjs(stat.trend_date).format('DD/MM'),
            }
          })}
        />
      </div>
    </>
  )
}

export default Home
