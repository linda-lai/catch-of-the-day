# Catch of the Day
Practicing building dynamic and persistent React components following React for Beginners by Wes Bos.

## Summary
Catch of the Day is a real-time application built with dynamic website components using React and Firebase, featured in the React for Beginners course by Wes Bos.

The application features a dynamically rendered menu, order form and inventory management section where authorised users can immediately update product details.

This course allowed me to reinforce my ES6 familiarity and deep dive into React concepts like React Router, managing state, persistence using Firebase and HTML5 LocalStorage and deployment to consolidate my learning as a student.

## Resources
* React for Beginners: https://reactforbeginners.com/
* React for Beginners Starter Files: https://github.com/wesbos/React-For-Beginners-Starter-Files/blob/master/catch-of-the-day/package.json
* Firebase Console: https://console.firebase.google.com/u/1/project/catch-of-the-day-linda-lai/database/catch-of-the-day-linda-lai/data
* React Components: https://reactjs.org/docs/react-component.html
* Component Lifecycle Methods: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Tips
HTML Shortcut:
```js
form.store-selector => return <form className="store-selector"></form>
```

## Events
Unlike regular JavaScript, events are inline rather than separated between files.

## State
State is an object that lives inside a component that stores data that itself and its children may need.

With React, it is stored in state, and when this is updated, will automatically updated this wherever it is referenced.

State is the `single source of truth` for data.

Data cannot be passed up; can only be passed down.

`state`: what component looks like when first initialised.

In order to update state, the `setState`


{/* Object.keys => Transforms object into an array, with the object keys as array values  */}