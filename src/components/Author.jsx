import { useLoaderData, useOutletContext } from "react-router-dom"

export const Author = () => {
    // const {aboutAuthor} = useLoaderData();
    const aboutAuthor = useOutletContext


    return <p>{aboutAuthor}</p>
}