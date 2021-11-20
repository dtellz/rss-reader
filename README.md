# Project name: rss-reader 
        
    Developer: Diego Téllez Barrero
    Requirements: Inteligenz
    Position: Frontend Junior


![tesla](https://github.com/dtellz/rss-reader/blob/master/src/assets/tesla.png?raw=true)


## 1.- INTRODUCING [https://newsapi.org ](https://newsapi.org ) 

In order to understand server responses and how we manipulate it when we fetch its endpoint we need to read NewsAPI documentations which can be found [here ](https://newsapi.org/docs) 

All endpoints follow the same structure: https://swapi.dev/api/entity/id

### PEOPLE:

    {
        "birth_year": "19 BBY",
        "eye_color": "Blue",
        "gender": "Male",
        "hair_color": "Blond",
        "height": "172",
        "mass": "77",
        "name": "Luke Skywalker",
    }
### FILMS:
    {
        "director": "George Lucas",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25",
        "title": "A New Hope",
    }

### STARSHIPS:

    {
        "MGLT": "10 MGLT",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "cost_in_credits": "1000000000000",
        "crew": "342953",
        "hyperdrive_rating": "4.0",
        "length": "120000",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "max_atmosphering_speed": "n/a",
        "model": "DS-1 Orbital Battle Station",
        "name": "Death Star",
        "passengers": "843342",
        "starship_class": "Deep Space Mobile Battlestation",
    }

### VEHICLES:

    {
        "cargo_capacity": "50000",
        "consumables": "2 months",
        "cost_in_credits": "150000",
        "crew": "46",
        "length": "36.8",
        "manufacturer": "Corellia Mining Corporation",
        "max_atmosphering_speed": "30",
        "model": "Digger Crawler",
        "name": "Sand Crawler",
        "passengers": "30",
        "vehicle_class": "wheeled"
    }


### SPECIES:

    {
        "average_height": "2.1",
        "average_lifespan": "400",
        "classification": "Mammal",
        "designation": "Sentient",
        "language": "Shyriiwook",
        "name": "Wookie",
        "skin_colors": "gray",
    }

### PLANETS:

    {
        "climate": "Arid",
        "diameter": "10465",
        "gravity": "1",
        "name": "Tatooine",
        "orbital_period": "304",
        "population": "120000",
        "rotation_period": "23",
        "surface_water": "1",
        "terrain": "Dessert",
    }

## 2.- INTRODUCTION:

Following KISS principle and Atomic Design pattern I have developed this front-end reactive SPA using React as development Javascript library. Code is published in github following a trunk-based source-control branching model with a main branch and a feature/front working branch.

Material UI is used as component library and react-router as client-side routing.

## 3.- COMPONENTS:

Cards

	Props: info
	Since every entity has a different data composition I decides to used different card-styled components for each of them. They all share a style.css file having a shared class ‘card’ and a distinct one ‘<entity>’ for different shapes.
	All of them receive its related information from the API response and are called from Data-grid component. The different cards are:

	Film	
	People
	Planet
	Specie
	Starship
	Vehicle

Data-grid

	Props: 
data -> API response
entity -> Entity searched

Depending of the entity prop it will call its related card passing it data elements using a .map function to generate all cards.

		
Footer

	Dumb component showing a centered image




Header

	Dumb component showing an image on its left side which acts as a link when clicked to ‘/home’

Inputs

	LogButton
	
	Only displayed after a search is made, it opens a modal with the recent search logs displayed via the ‘search-log’ component.

	Select
	Main search input, user is offered to search by entity. When a selection is done, it executes its father callback function prop ‘selected’ sending him the selected input value.

Search-form

	It displays Select component and Log-btn. Via a useEffect react-hook which depends on the searchedEntity which can be changed via the select Component it fetches the API and sends the data to its parent component via dataFlow callback function prop.

Search-log

	It retrieves information from localStorage and use state variables to save the data in case it exists. When all the data is logged it is sorted to show it starting from the most recent search. It displays the log and when the user clicks on any of the logs the component redirects to load page sending the key value of the localStorage item in order to retrieve the data on the page and display it.

Custom Hook : useWisdom
	
	It is a simple custom hook to retrieve a random phrase for the initial render of the home page


## 4.- PAGES

Home
	It is the main page, it can be accessed via ‘/home’ path with or without a path param ‘/home/:query’.

	Accessed via ‘/home’ it will on first render display a random phrase from star wars movies and a select input to make a search by entity. When an entity is selected if will fetch the API and display the related response. 

	Accessed via ‘/home/:query’, if query is an accepted parameter it will read from localStorage and display the logged data without any AJAX request.
