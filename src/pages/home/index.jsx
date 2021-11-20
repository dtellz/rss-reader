import { Fragment, useState, useEffect } from "react";
import NewsCard from '../../components/news-card'
import SearchBar from '../../components/search-bar'

const APIKEY = '1a2782dd15144317aa989d5fba626d6b'; // News API https://newsapi.org set to .env for production deploy

const Home = () => {

    const [feed, setFeed] = useState();
    const [isSearching, setIsSearching] = useState(false);
    const [searchedFeed, setSearchedFeed] = useState();

    const handleSearch = (val) => {
        setIsSearching(true);
        let search = feed.articles.filter(e => e.title.toLowerCase().includes(val.toLowerCase()));
        setSearchedFeed(search);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearching) {
            const DATE = new Date();
            const TODAY = DATE.getFullYear() + '-' + DATE.getMonth() + '-' + DATE.getDate();

            fetch(`https://newsapi.org/v2/everything?q=tesla&from=${TODAY}&language=en&sortBy=publishedAt&apiKey=${APIKEY}`)
                .then(res => res.json())
                .then(data => {
                    setFeed(data);
                    console.log(data);
                })
            console.log('API called');
        }
    }, [])




    return (
        <Fragment>

            <SearchBar updateSearch={handleSearch} />

            {searchedFeed ? searchedFeed.map((e, i) => {
                return <NewsCard image={e.urlToImage} title={e.title} description={e.description} url={e.url} key={i}></NewsCard>
            }) : feed?.articles.map((e, i) => {
                return <NewsCard image={e.urlToImage} title={e.title} description={e.description} url={e.url} key={i}></NewsCard>
            })}

        </Fragment>

    )
}

export default Home;

/*

import Parser from 'rss-parser';

import NewsCard from '../../components/news-card'


const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const FEED_URL = 'http://www.xatakandroid.com/tag/feeds/rss2.xml';

const parser = new Parser({
   customFields: {
       item: [["enclosure", { keepArray: true }]],
   },
});

const loadRSS = async () => {
   try {
       const data = await parser.parseURL(CORS_PROXY + FEED_URL);
       setFeed(data)
       console.log(data)

   } catch (error) {

       return error;
   }
};

useEffect(() => {
   loadRSS();
}, []) */