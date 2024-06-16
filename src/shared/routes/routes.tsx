import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MovieDetailsPage, MoviesPage, WishListPage } from '../../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MoviesPage />,
    },
    {
        path: '/wishlist',
        element: <WishListPage />,
    },
    {
        path: '/:movieId',
        element: <MovieDetailsPage/>,
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },

]);