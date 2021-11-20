# Project name: rss-reader 
        
    Developer: Diego Téllez Barrero
    Requirements: Inteligenz
    Position: Frontend Junior


![tesla](https://github.com/dtellz/rss-reader/blob/master/src/assets/tesla.png?raw=true)

## 1.- INTRODUCTION:

Following KISS, DRY principles and Atomic Design pattern I have developed this front-end reactive RSS reader using React as development Javascript library. Code is published in github following a trunk-based source-control branching model with a main branch and a develop working branch.

Material UI is used as component library and react-router as client-side routing.
## 2.- INTRODUCING [https://newsapi.org ](https://newsapi.org ) 

In order to understand server responses and how we manipulate it when we fetch its endpoint we need to read NewsAPI documentations which can be found [here ](https://newsapi.org/docs) 

In order to get the most recent news mentioning tesla (from over 80.000 sources) we fetch this endpoint 

```javascript
https://newsapi.org/v2/everything?q=tesla&from=${TODAY}&language=en&sortBy=publishedAt&apiKey=${APIKEY}`
```

where APIKEY is the given key from the API and TODAY is a built and formated date followin API requirements from it [documentation](https://newsapi.org/docs) 

```javascript
const DATE = new Date();
const TODAY = DATE.getFullYear() + '-' + DATE.getMonth() + '-' + DATE.getDate();
```



## 3.- COMPONENTS:

### Header

	It is a dumb component showing Tesla logo which works as a redirect link to homepage

### News-card

	Props: 
        image -> url to the image of the news article
        title -> news headline
        description -> a summary of the new
        url -> url the source 

    As a smart component it will display a "card" type view panel showing its entity related data.

		
### Search-bar

    Its main function is to get the users input and on an onChange event send the input to its parent component. It is a material-ui standar textField.
## 4.- PAGES

### Home
	It is the main page, it can be accessed via ‘/home’.

	Accessed via ‘/home’ it will on first render display the latest 20 news articles received from the API. It will store the data on a state variable in order to use it as a filtering structure to show searched news. 


### Article
    Its function is to display one news article selected by the user. You can reach this page by clicking one of the cards in the home page. It will receive the data to display via query params and display it for a better view of the article. You can always go back to home clicking tesla logo on the header.

