import { Fragment, useState, useEffect } from "react";
import NewsCard from '../../components/news-card'


const APIKEY = '1a2782dd15144317aa989d5fba626d6b';

const Home = () => {

    const [feed, setFeed] = useState();



    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-10-20&language=en&sortBy=publishedAt&apiKey=${APIKEY}`)
            .then(res => res.json())
            .then(data => {


                console.log(data);

                /*                 let feedToDispaly = data.articles.map(e => {
                
                                    return <NewsCard image={e.urlToImage} title={e.title} description={e.description}></NewsCard>
                
                
                                }) */

                setFeed(data);



            })
    }, [])


    return (
        <Fragment>

            <h1>Hello world Home!</h1>

            {feed?.articles.map(e => {
                return <NewsCard image={e.urlToImage} title={e.title} description={e.description}></NewsCard>
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