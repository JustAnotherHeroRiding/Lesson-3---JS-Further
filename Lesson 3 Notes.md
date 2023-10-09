String(n) will create a string from the passed number
String is a class in javascript that will change the type
String can be used as an interface
toString returns a string a representation
Both return a string
if the number is a float it will be truncated
Only if we call tofix with 2 digits it will be saved
parseInt will also truncate
parseFloat
if we use 10.00 it will be truncated
if we use 10.12 it will not 
parsing a object will return NaN
typeof var will check the type of the var




## Html
Linking a script tag
If it is on top it will not detect the html elements
If we set the defer property to "defer" then it will wait
Template strings(with backticks)
Allows us to write better html in js files
To access an object property, we need to use this.variable
If age is defined inside an object, we need to use this.age


## Date object
Consists of the year, month, day and exact date
Creating date objects
always uses utc
Get day returns day of week using local time
getDate returns day of the month
getHours returns hour
getMonth returns month

getTime, returns s from 1970/01/01


project idea with dates, subtraction and calculating dates
using setTime and getTime and doing operations


## IIFEs

immediately irrevocable functions
Wrapping a function with curly brackets and then calling it calls it

### Reading on IIFEs



## Data types in JS
- string
- boolean
- number

- undefined
- null
- symbol

- object


### Window

window is inbuilt
window prompt, alert
window.location

window.back(delta - n ) to go backwards n sites on the tab history
window.navigator


### Document
This contains the entire dom structure and is a child of the window
document.all will log an array of all elements
document.body.children will return the children of the body element
we can access the first children by using document.body.children[0]


### Window vs document
- Window is the entire browser, document is the current html file that is opened
- Both are objects containing all the methods




### Dom manipulation
- text can be changed with innerText, innerHTML or textContent
- We can add styles by using element.BackgroundColor and all other valid css styles
- We cannot write normal css style declarations
- We can access any element using query selector and an identifying mark such a class, element type or id
- If using element type the first match will be returned
- Query selector and query selector all

 Node types
1. Element
2. Atribute
3. Text node
8. Comment
9. Document itself
10. doctype
 

NextelementSibling
nextelement
previouselement
previousElementSibling


classList
className


appendChild to add a child to an element
creating a text node to add to an element




item.remove will remove an item


replaceChild

event.preventDefault
event.stopPropagation

event bubbling

.parentElement


sessionStorage and localStorage


## Todo app with localStorage

- add to local storage, tasks should be saved between refreshes #DONE 
- delete a task also from local storage #DONE 
- Search through tasks #DONE 
- style the interface
- skeleton CSS for a start #DONE 
- Google icons or fontawesome #DONE 
- To do items save even when closing browser #DONE 
- Clear state #DONE 
- Functions!!! #DONE 
- No duplicate code #DONE 
- branch name is task/TODOlist #DONE 
- when i push the request, i should send a merge request to the main branch






## Number guesser game
- SkeletonCSS #DONE 























