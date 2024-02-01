# React + TypeScript + Vite + React Query + daisyUI + Tailwind CSS + React Router (Football (soccer) Updates Application)

## App public

- [Football Updates Application](https://fcastro84.github.io/react-typescript-european-leagues/)

## Install

```
$ yarn add @tanstack/react-query -E

$ yarn add -E -D daisyui@latest

$ yarn add -D tailwindcss postcss autoprefixer

$ yarn tailwindcss init -p

$ yarn add -E react-router-dom localforage match-sorter sort-by
```

``` js
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [require("daisyui")],
}
```

- Add the @tailwind directives for each of Tailwind's layers to your **./src/index.css** file.

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Excersise

### STEP #1- Implement the ability to select a country

![step 1](/public/assets/1.jpg)

- Note that styling is not that important for this project, and the layout of your application can be different as long as the application works properly. This is an Angular certification, not a CSS or HTML certification.
- Each button should have an HTML attribute ID equal to **{countryName}Select** such as **englandSelect**, **spainSelect**, etc.

### STEP #2- Display the standings of the top league in the selected country for the current season

![step 2](/public/assets/2.jpg)

- Use the [API Football](https://www.api-football.com/documentation-v3#tag/Leagues/operation/get-leagues) database to get the data. The API has a limit of **10 requests per minute** and **100 requests per day** so you have to make as few requests as possible and possibly **cache the results** so you’re not requesting the same data twice.
- The API requires a **key**. You can [get your own free API key by following these instructions](https://drive.google.com/file/d/1nvirye5ApV2-hRrT7dOwAtzjroaZvEft/view). Don’t hesitate to create another key if you get stuck with the 100-request limit. The application has to work when you submit it, the 100-request limit cannot be used as an excuse when submitting the application.
- The top leagues we want to track for each country are:
  - England = Premier League
  - Spain = La Liga
  - France = Ligue 1
  - Germany = Bundesliga
  - Italy = Serie A
- You can find the league IDs here: [https://dashboard.api-football.com/soccer/ids](https://dashboard.api-football.com/soccer/ids)
- Note that you must use the **current season** and get it from the current date so the application still works in the future.
- The standings [(API endpoint here)](https://www.api-football.com/documentation-v3#tag/Standings/operation/get-standings) must display the name and logo of the teams, number of games played, wins (W), losses (L), draws (D), goal difference (GD) and number of points (pts):

![3](/public/assets/3.jpg)

### STEP #3- Display the last 10 game results when clicking on a team

![step 3](/public/assets/4.jpg)

- Clicking on a team name in the standings should display the last 10 results of that team, including the scores and the logos of the teams as shown above. You must use the router to implement that feature. The [fixtures API endpoint](https://www.api-football.com/documentation-v3#tag/Fixtures/operation/get-fixtures) will give you that data.
- Add a button at the bottom of the page that redirects to the league selection screen. The previously selected league should still be selected at that point: If I came to the **Liverpool FC** results page from the **English** league, hitting the back button brings me back to the **English** league standings.

## Documentation

- [daisyUI](https://daisyui.com/)
- [tailwindcss](https://tailwindcss.com/docs/installation)
- [react-query](https://tanstack.com/query/latest/docs/react/installation)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [API: Football](https://www.api-football.com/documentation-v3#tag/Leagues/operation/get-leagues)
