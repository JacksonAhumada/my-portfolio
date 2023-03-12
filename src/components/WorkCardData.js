import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.jpg";
import { Link } from 'react-router-dom';

const WorkCardData = [
  {
    imgsrc: pro1,
    title: "Clubhouse Caddie",
    text: "Experience golfing like never before with our app that brings the clubhouse to you! Order mouth-watering food, ice-cold drinks, and essential golf supplies from the comfort of your cart.",
    //put url of the project here.
    view: <Link to="/caddie" className="btn">View</Link>,
    //github url for project
    source: "https://github.com/mmuugii/Beverage-Buddy",
  },
  {
    imgsrc: pro2,
    title: "The Local",
    text: "A database of curated lists of restaurants, attractions, and entertainment for a city created by travelers and locals.",
    //put url of the project here.
    view: <Link to="/local" className="btn">View</Link>,
    //github url for project
    source: "https://github.com/JacksonAhumada/the-local",
  },
  {
    imgsrc: pro3,
    title: "Cherry Picked",
    text: "Cherry Picked is a recipe search engine that helps users discover food and drink recipes based on the ingredients they already have in their fridge.",
    //put url of the project here.
    view: <Link to="/cherry" className="btn">View</Link>,
    //github url for project
    source: "https://www.github.com/kelvinsinferno/Cherry-Picked",
  },
];

export default WorkCardData;
