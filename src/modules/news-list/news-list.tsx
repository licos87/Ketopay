import dayjs from 'dayjs';
import { useAppSelector } from '../../shared/hooks/use-app-selector';
import { selectLoadNews } from '../../store/selects';
import { TNews } from '../../shared/types';
import { NewsCard } from '../news-card/news-card';

export function NewsList() {
  const newsData: TNews[] = useAppSelector(selectLoadNews);
  const groupedNews = Object.groupBy(newsData, (item: TNews) =>
    dayjs(item.pubDate).format('DD.MM.YYYY')
  );
  const sortedNewToDate = Object.entries(groupedNews);
  return (
    <>
      <ul>
        {sortedNewToDate.reverse().map((item) => {
          return (
            <li key={crypto.randomUUID()}>
              <div>
                <h3 className="flex font-bold text-lg leading-7 text-left my-2.5">
                  News for {item[0]}
                </h3>
                <ul className="flex flex-col gap-4 px-5">
                  {item[1].reverse().map((news) => {
                    return (
                      <li
                        className="not-last:border-b-1 border-[#ededed] pb-4"
                        key={crypto.randomUUID()}
                      >
                        <NewsCard
                          webUrl={item[0] + news.webUrl}
                          source={news.source}
                          url={news.multimedia[3]?.url}
                          title={news.abstract}
                          pubDate={news.pubDate}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
