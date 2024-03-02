import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import './App.css';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "/dogImages/whiskey.jpg",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: "/dogImages/duke.jpg",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: "/dogImages/perry.jpg",
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: "/dogImages/tubby.jpg",
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dogs" element={<DogList data={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails data={dogs} />} />
        <Route path="*" element={<Navigate replace to="/dogs" />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;