import './style.css';
import { useNavigate } from 'react-router-dom';

const NewsCard = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {

        navigate(`/news?image=${props.image}&title=${props.title}&description=${props.description}&url=${props.url}`)

    }

    return (
        <div className='news-card__main-container ripple' onClick={handleClick}>
            <div className='news-card__header'>
                <img className='news-card__img' src={props.image} alt="tesla_news_image" />
                <h3 className='news-card__title'>{props.title}</h3>
            </div>
            <p className='news-card__description'>{props.description}</p>
        </div>
    )
}


export default NewsCard;

// content={e.content} url={e.url}





