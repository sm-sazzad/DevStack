# 🚀 DevStack

## 📋 Project Description

**DevStack** is a simple web application for exploring and building a development technology stack. Users can browse different frontend, backend, database, and development tools, compare their details, and add their favorite technologies to a personal stack.

## 🛠️ Technologies Used

* HTML
* Tailwind Css, Daisyui
* TypeScript
* React
* React-Toastify (NPM Package)
* JSON (for technology data)
* Vite (build tool)
* Netlify (Deployment)

## ✨ Features

* **Explore Technologies**: Browse different frontend, backend, database, and development tools in one place.
* **Technology Cards**:  Each technology includes its icon, description, category, rating, badge, and use case.
* **Add to Stack**: Add the technologies you like to your own development stack.
* **Your Stack**: View all your selected technologies in one place.
* **Remove Technologies**: Remove any technology from your stack whenever you want.

## 🔗 Live Link

### **[DevStack](https://devstack-sm-sazzad.netlify.app/)**

## ⚛️ React Questions & Answers

### i. What is JSX, and why is it used in React?

Ans: JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. We can also use CSS and Tailwind CSS with JSX to create and change the UI of a React application.

### ii. What is the difference between props and state?

**Ans**: Props are used to pass data from a parent component to a child component. State is a data or value of a component, which is used to store values and update the UI when the state changes.

### iii. What does the useState hook do, and where did you use it in this project?

**Ans**: The `useState` hook stores a data or value inside a React component and updates the UI based on that state. When we use `useState`, we get two things: the state value and a setter function. The setter function is used to update the state.
In my DevStack project, I used `useState` to store the technology cards when a user clicks Add to card.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans**: We can use `useEffect` to fetch data from an API. But in my DevStack project, I did not use `useEffect` to fetch the data. I used the `use` hook from the latest version of React to load the data from a JSON file.

### v. Why does every item in a .map() list need a unique key prop?

**Ans**: When we use the `.map()` method in React, it creates multiple items. We use the `key` prop to make each item unique and help React identify each item.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Ans**: Conditional rendering means changing or showing a part of the UI based on a condition. In my DevStack project, I used conditional rendering in many places. For example, if the length of the selected items is not zero, the Remove All button is shown. If the length is zero, the button is not shown. I also used conditional rendering in the Your Stack section.

## 💻 Example

> Conditional rendering for the "Remove All" button.

```jsx
{selected.length !== 0 ? (
    <button
        onClick={() => handelRemoveAllButton()}
        className="w-full mt-6 py-2 bg-black text-white font-semibold rounded-xl cursor-pointer"
    >
        Remove All
    </button>
) : ('')}
```

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans**: We use props to pass data from a parent component to a child component. We can also pass a function from the parent to the child as a function prop. The child component can call that function to send data back to the parent component.
