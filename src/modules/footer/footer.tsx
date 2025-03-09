export function Footer() {
  return (
    <div className="flex flex-col py-10 items-center gap-6 mx-auto">
      <ul className="flex gap-5">
        <li className="flex">
          <a className="text-xs" href="#">
            <span className="visually-hidden">Log In</span>
            Log&nbsp;In
          </a>
        </li>
        <li className="flex">
          <a className="text-xs" href="#">
            <span className="visually-hidden">About Us</span>
            About&nbsp;Us
          </a>
        </li>
        <li className="flex">
          <a className="text-xs" href="#">
            <span className="visually-hidden">Publishers</span>
            Publishers
          </a>
        </li>
        <li className="flex">
          <a className="text-xs" href="#">
            <span className="visually-hidden">Sitemap</span>
            Sitemap
          </a>
        </li>
      </ul>
      <img src="./src/assets/image/news-api.svg" alt="News API" />
      <p className="text-xs">© 2023 Besider. Inspired by Insider</p>
    </div>
  );
}
