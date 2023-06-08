import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() =>
  import('../components/mainLayout/mainLayout')
);
const Home = lazy(() => import('../pages/home/home'));
const Movies = lazy(() => import('../pages/movies/movies'));
const Cast = lazy(() => import('../pages/movies/cast/cast'));
const Reviews = lazy(() => import('../pages/movies/reviews/reviews'));
const MovieDetails = lazy(() => import('../pages/movies/moviesDetails'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
