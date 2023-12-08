import { useLoaderData, useNavigate, NavLink, useSearchParams } from "react-router-dom"


export const BookList = () => {
    const books = useLoaderData();
    const goBack = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('title') ?? '';

    const updateQueryString = (title) =>{
        const nextParams = title !== "" ? { title } : {};
        setSearchParams(nextParams)
    }

    const filterBooks = books.filter(({title}) => {
        return title.toLowerCase().includes(searchParam.toLocaleLowerCase())
    })

    return(
    <div>
        <input type="text" value = {searchParam} onChange = {(e) => updateQueryString(e.target.value)}/>
        <button type="button" onClick={() => {goBack(-1)}}>Go back</button>
        <h1>BookList</h1>
                <ul className="bookList">
                {filterBooks.map(({id, title, author})=>(
                    <li key={id}> 
                    <NavLink to={`/books/${id}`}>{id} - {title} - {author}</NavLink>
                    </li>
                ))}
                </ul>
    </div>
    )
}