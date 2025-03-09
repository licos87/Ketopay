import { useState } from 'react';
import classNames from 'classnames';

export function Header() {
  const [isClose, setIsClose] = useState(true);

  const burgerMenuHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsClose(!isClose);
  };
  return (
    <header
      className={classNames(
        'flex align-middle border-b border-b-[#ededed] tracking-widest font-bold text-2xl sticky top-0 pb-5 pt-5 bg-white',
        {
          'border-b-0': !isClose,
        }
      )}
    >
      <button
        className={classNames(
          'cursor-pointer z-10 transition-transform duration-400 relative',
          {
            'translate-x-75 transition-transform': !isClose,
          }
        )}
        onClick={(e) => burgerMenuHandler(e)}
      >
        <svg
          className={classNames('absolute top-2', {
            invisible: !isClose,
          })}
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="2.25" />
          <rect y="6.75" width="20" height="2.25" />
          <rect y="13.5" width="20" height="2.25" />
        </svg>
        <svg
          className={classNames('invisible absolute top-1', {
            visible: !isClose,
          })}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L1 1M21 1L1 21"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="visually-hidden">Menu</span>
      </button>
      <div
        className={classNames(
          'h-screen w-screen absolute flex top-0 left-0 p-5 place-items-center bg-white',
          { invisible: isClose }
        )}
      >
        <ul
          className={classNames(
            'flex flex-col gap-7 items-start duration-300',
            {
              'opacity-0': isClose,
              'opacity-100': !isClose,
            }
          )}
        >
          <li>
            <span className="visually-hidden">Science</span>
            <a href="#">SCIENCE</a>
          </li>
          <li>
            <span className="visually-hidden">General</span>
            <a href="#">GENERAL</a>
          </li>
          <li>
            <span className="visually-hidden">Entertainment</span>
            <a href="#">ENTERTAINMENT</a>
          </li>
          <li>
            <span className="visually-hidden">Tehnology</span>
            <a href="#">TECHNOLOGY</a>
          </li>
          <li>
            <span className="visually-hidden">Business</span>
            <a href="#">BUSINESS</a>
          </li>
          <li>
            <span className="visually-hidden">Health</span>
            <a href="#">HEALTH</a>
          </li>
          <li>
            <span className="visually-hidden">Sports</span>
            <a href="#">SPORTS</a>
          </li>
        </ul>
      </div>
      <h1
        className={classNames('flex-2/3 transition-opacity duration-300', {
          'opacity-0 transition-opacity': !isClose,
        })}
      >
        BESIDER
      </h1>
    </header>
  );
}
