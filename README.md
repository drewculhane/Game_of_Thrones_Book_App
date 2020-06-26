ReactProject

# Project Overview

## Project Links

- [https://github.com/drewculhane/ReactProject]()
- [add your deployment link]()

## Project Description

My final project will deliver information about the book series "A Song of Ice and Fire" on which, Game of Thrones is based. 
It will list all the books. Clicking on add to favorites in mobile will add the book on another page "spotlight" which can be accesesed via the main 
navigation. A homepage and an about page will also exist, with some information, and links, and some aesthetically pleasing elements. 

The main difference between the functionality of desktop and mobile, will be that in desktop, clicking on a book in the list will put it in the spotlight INSIDE Book List, and they can receive more information on the book in that altered spotlight. In the spotlight section of Book List, if the user clicks favorites, then Navigates to "spotlight/favorites" section through the nav in desktop, they can see their saved book, and if minimum MVP is reached, at post MVP, I might try to use an additional API/string literal link to link the user to amazon to buy the book.  

## API

Please find the API in the codesandbox below. If you console.log, you will see that the API and my code for the retrieval, are fully functional. 

-[https://codesandbox.io/s/api-test-got-mfxxv]()


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137511/React%20Hierarchy%20and%20Wireframes/Wireframe_Home_Mobile_zfkdhv.png]()
Home Mobile Wireframe
-[https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137522/React%20Hierarchy%20and%20Wireframes/Wireframe_Book_List_Mobile_ord1al.png]()
Book List Mobile Wireframe
-[https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137526/React%20Hierarchy%20and%20Wireframes/Wireframe_Spotlight_Mobile_awyeh7.png]()
Spotlight Mobile Wireframe
-[https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137538/React%20Hierarchy%20and%20Wireframes/Wireframe_About_Mobile_rbkq5w.png]()
About Mobile Wireframe
-[https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137554/React%20Hierarchy%20and%20Wireframes/Wireframe_Desktop_Tablet_Home_zhxt8o.png]()
Home Desktop/Tablet Wireframe. It will include the spotlight mentioned in mobile wireframes however. 
-[https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137550/React%20Hierarchy%20and%20Wireframes/List_of_Books_Component_Desktop_Tablet_xf9c4j.png]()
List of Books component in the desktop/tablet wireframe. 
-[https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137543/React%20Hierarchy%20and%20Wireframes/Desktop_Tablet_wireframe_About_sue84u.png]()
About component in Desktop/Tablet Wireframe. 
- [https://res.cloudinary.com/dgmpgmo60/image/upload/v1593137506/React%20Hierarchy%20and%20Wireframes/React_Hierachy_oxx4eu.png]()
COMPONENT WIREFRAME.... Mobile and Desktop will both include spotlight component. To account for the spotlight component not being on the same
page as the Book List in mobile, add to favourites/spotlight button will be included on each book component in mobile. 


### MVP/PostMVP - 5min

MVP: 
* Data flows from API correctly and without errors. 
* Component hierachy achieves the goal of allowing spotlight/favorites. 
* Fully Responsive for mobile, tablet & desktop. 
* Basic design with no aesthetic enhancements. 

Post MPV: 
* Aesthetic enhancements. 
* Workshop animations. 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Home  | This is the home page.  |
| Nav    | Set up with Router, boostrap. |
| About | Set up with Router, non-dynamic information. |
| Book List | Set up with State, useEffect. Will pull in data from App. For Spotlight, refer to Pokedex sandbox. |
| Book Component | Will facilitate design of the  individual book. Refer to Pokedex sandbox. | 
| Spotlight Component | Will need set up with handleclicks. Again, refer to Pokedex sandbox, see if you can leverage useContext |


Time frames are also key in the development cycle.  You have limited time to code all phases of the website.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App Api  | H | 0.5hrs| |  |
| App Router Setup| H | 2hrs| | |
| Nav setup with Boostrap | H | 1.5hrs|  |  |
| Text and links in Home/About | 1hr | | |
| Book and Booklist Component | 2hr |
| Setting up classNames for media query display changes, and Fave toggle display changes for mobile/desktop| 4hrs|
| Getting favorites to show up in Spotlight | 4hrs |
|  Minmum acceptable media query changes | 5hrs |

Total time expected to hit MVP: 20 hours. 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
