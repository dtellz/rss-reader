import './style.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
/**
 * 
 * @returns 
 */

const Article = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery();
    let description = query.get('description');
    let title = query.get('title');
    let image = query.get('image')
    let url = query.get('url');
    console.log(typeof content)
    return (
        <div className='article__main-container'>
            <h1 className='article__title'>{title}</h1>
            <img src={image} />
            <p>{description}</p>
            <a className='article__link' href={url} target="_blank">Read full article</a>
        </div>
    )
}

export default Article;