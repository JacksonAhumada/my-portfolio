import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const WorkCardData = [
  {
    imgsrc: pro1,
    title: "My next big project",
    text: "This will be the description of my next project in the works. Coming soon!!",
    //put url of the project here.
    view: "project.url",
    //github url for project
    source: "github.url",
  },
  {
    imgsrc: pro2,
    title: "The Local",
    text: "A database of curated lists of restaurants, attractions, and entertainment for a city created by travelers and locals.",
    //put url of the project here.
    view: "https://fathomless-island-66703.herokuapp.com/login",
    //github url for project
    source: "https://github.com/JacksonAhumada/the-local",
  },
  {
    imgsrc: pro3,
    title: "Cherry Picked",
    text: "A simpler way to find meal and drink recipes.",
    //put url of the project here.
    view: "https://kelvinsinferno.github.io/Cherry-Picked/",
    //github url for project
    source: "https://www.github.com/kelvinsinferno/Cherry-Picked",
  },
];

export default WorkCardData;
