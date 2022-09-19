Assignment Description - We need to create an ecommerce home page. With three components given in the illustration below. Product data should be stored in Mongodb and served using an express server. 

Component 1  - This component is about searching products stored in mongodb. User should be able to search products by brandName, name or description. Results will be returned as list of suggestions. Max 10 results would be returned. Showing one product image and name. 
Must have – 1. Add debouncing for product search

Component2 – Build Carousel without using any third-party library. Users should be able to scroll to next and prev img using buttons. Images should appear in a loop. And it should be reusable react component
This component will show the latest offers. For assignment purpose can use any images…image urls should come from database

Notes:
1.Please use the MERN stack to complete the assignment.
2.Do not use any external css and js library to build the functionalities
3.Can use mongoose in backend to connect to mongodb and express library to build server.
4.Build reusable component for Carousel and dropdown in React
5.Timeline to submit the exercise is 24hrs after sharing it. Share the github url once done.
 

Product Schema {
listOfImages: [],
options : [ ] //this will be list used for dropdown,
name : “”,
description: “”,
_id: “”,
Productid: “”,
Quantity: “”,
Rating: number, // possible values – 1,2,3,4,5
brandName: “”}
