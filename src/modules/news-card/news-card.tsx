import dayjs from 'dayjs';

type NewsCardProps = {
  webUrl: string;
  source: string;
  url: string;
  title: string;
  pubDate: string;
};

export function NewsCard({
  webUrl,
  source,
  url,
  title,
  pubDate,
}: NewsCardProps) {
  return (
    <a href={webUrl} className="flex flex-col gap-2">
      <span className="text-blue-600 font-extrabold text-sm text-wrap">
        {source}
      </span>
      <div className="flex gap-3 justify-start">
        {url && (
          <img
            className="w-[99px] h-[74px] object-cover bg-white"
            src={`https://www.nytimes.com/${url}`}
            alt="image"
            width="75px"
            height="75px"
          />
        )}
        <div className="flex flex-col items-start">
          <h4 className="text-base font-normal leading-5.5 text-justify">
            {title}
          </h4>
          <span className="text-[#6D787A] text-sm">
            {dayjs(pubDate).format('MMM DD, YYYY, hh.mm A')}
          </span>
        </div>
      </div>
    </a>
  );
}
