# Project-1 Monster-Dex
## Monster Hunter Themed PokeDex
### Motivation:
Since its release in early 2018, Iv'e been a hardcore fan of Monster Hunter World. Its captivating landscapes, world environment, wide variety of weapons to choose from, intricate character building, high skill cap, and of course, its huge roster of monsters to capture and/or slay has given me this never before felt immersive experience in a video game. I've accumulated over 1600 hours in Monster Hunter World and can easily say it's one of my top 5 favorite games of all time. With the task to create a project, I decided this was the perfect opportunity to create an informational catalogue for the monsters of Monster Hunter World to give users an idea of what these monsters are, how they appear in game, their habitats, what they're capable of, and what their weaknesses are.

### User Stories
* AAU(As A User), I can click on a selection of windows shown on screen to go further into the directory leading to an individual monster that displays information on the monster
* AAU, I can go to the previous page from within the directory by clicking on the left arrow icon
* AAU, I can play the personal monster theme music from within the individual monster profile by clicking on the "Play Theme" button on the bottom right of the page
* AAU, I can click the right arrow located on the right of the screen in the wyvern pages to scroll through monsters to select.

### Psuedo Code

1. add HTML for header text
2. use a promise to fetch the data of monsters using the monster hunter api
3. convert results from promise into an array of monsters
4. create a function to display monsters on screen 
5. create an ordered list in HTML to apply display function to
6. create an HTML string and add monster details that want to be shown on the monsterDex
7. filter monster array to only show large monsters
8. create a function to pull data of individual monsters from api when selected
9. create an if statement to bypass nonexistent numbers when clicked on (api was broken)
10. create a function to display a pop up window when a monster is clicked on
11. invoke the display function to the select function so when a monster in selected, the monsters info will display on the popup
12. create an HTML string for the specific information to be displayed on the popup window
13. map information that is grouped in an array in order to display on popup window
14. add HTML string to pokedex dom element in order for popup to show 
15. add close button to popup HTML string
16. create a function to close the popup window when clicked on
17. add and assign images to HTML string using a template literal to display monsters based on index of monster in array
18. add button for theme to play when clicked on 
19. create a function for theme to play when button is clicked on
20. add and assign themes to HTML string using a template literal to play theme music for monsters that have it
21. style
22. style
23. animate
24. style
25. profit




## Wire-Frame
#### This is the first page of the site that will appear to the user
![Image of Home/Main page](images/1-Wyvern-Page.png)
#### After clicking on one of the wyvern types, you will be brought to this page displaying the monsters of selected wyvern type
![Image of Home/Main page](images/2-Monster-List.png)
#### After clicking on a monster you will be redirected to this page displaying the slected monster's information
![Image of Home/Main page](images/3-Monster-Details.png)



