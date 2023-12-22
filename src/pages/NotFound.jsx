import { useNavigate } from "react-router-dom"

export function NotFound() {
    const navigate = useNavigate();
    
    return (
        <>
        <h1>Not Found</h1>
        <button type="button" onClick={() => navigate('/books')}>Go back</button>
        </>
        
    )
}