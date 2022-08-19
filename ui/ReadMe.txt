Packages used:
bootstrap,
react,
react-bootstrap,
react-icon,
react-icons,
react-router-dom,



AddProduct Page:
The logo has been taken from the official site 
For time being i have used "Required" feild as Validation

FOR TESTING:
The User has to fill all the input feild and click on the Add Product button 
on Clicking of that button we can see a alert with the product name
User Have to Click on View Product Page to See All The information he/she Provided will be displayed as a card i used react-bootstrap for making card
I used react-routerdom for navigation(Going From On page to another)
I used react-icon For cart icon

View Product Page:
All the Information filled in AddProduct Page has been displayed over here using map method (the data is comming from the backend)
for time being I used A Single Image for all the products
User can Click Edit button and edit model will be open 
User has to fill all the data which need to be updated
and User can Delete the data by using Delete button
On Click on the delete button an alert will be pop up with deleted message

EditModel page:
EditModel page consist of model for editing the data
the edit model page is getting data from view product page as a prop
I used react-bootstrap for creating model
user have to enter the data whicjh he want top change and the data will be EditModel


shopify navbar:
This Page Consist of Navabar fr our ui
it consist of 2 component
1 logo
and a icon for redirecting to addProductPage
i used react-icon for icons
User can click on  either logo or icon for redirection
i used useNavigation of react-router-dom 

Custom css:
i used react-bootstrap,inline and external css
all the css and its used are mention along with its uses in the App.css


