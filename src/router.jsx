import { createBrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import {Home} from "pages/Home";
import {BookList} from "pages/BookList";
import { fetchBooks, fetchBooksById } from "service/fetchBooks";
import { NotFound } from "./pages/NotFound";
import { Book } from "./pages/Book";
import { Author } from "./components/Author";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            children: [
                {
                    element: <Home/>,
                    index: true,
                },
                {
                    path: '/books',
                    element: <BookList/>,
                    loader: fetchBooks,
                },
                {
                    path: '/books/:bookId',
                    element: <Book/>,
                    loader: fetchBooksById,
                    children: [
                        {
                            path: '/books/:bookId/author',
                            element: <Author/>,
                            loader: fetchBooksById
                        }
                    ]
                }
            ]
        }
    ]
)