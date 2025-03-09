import { useEffect } from 'react';

import { useAppDispatch } from '../shared/hooks/use-app-dispatch';
import { fetchNewsAction } from '../store/async-actions';
import { useAppSelector } from '../shared/hooks/use-app-selector';
import { selectIsError, selectIsLoading } from '../store/selects';
import { Header } from '../modules/header';
import { NoContent } from '../modules/no-content';
import { Spiner } from '../modules/spiner';
import { NewsList } from '../modules/news-list';
import { Footer } from '../modules/footer';

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewsAction());
    setInterval(() => {
      dispatch(fetchNewsAction());
    }, 30000);
  }, [dispatch]);

  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);

  return (
    <>
      <div className="max-w-90 m-auto text-center px-5 relative h-screen flex flex-col">
        <Header />
        <div className="grow-1">
          {isError && <NoContent />}
          {isLoading && <Spiner />}
          <NewsList />
        </div>
        <Footer />
      </div>
    </>
  );
}
