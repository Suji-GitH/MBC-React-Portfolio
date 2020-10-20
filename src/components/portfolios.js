import one from "../assets/img/JapCharacter/ichi.gif";
import two from "../assets/img/JapCharacter/ni.gif";
import three from "../assets/img/JapCharacter/san.gif";
import four from "../assets/img/JapCharacter/yon.gif";
import five from "../assets/img/JapCharacter/go.gif";
import six from "../assets/img/JapCharacter/roku.gif";
import PFP from "../assets/img/Screenshots/PFP.jpg";
import Trace from "../assets/img/Screenshots/Trace.jpg";
import PassGen from "../assets/img/Screenshots/PassGen2.jpg";
import EmployeeTracker from "../assets/img/Screenshots/ET.jpg";
import ChatApp from "../assets/img/Screenshots/ChatApp2.jpg";
import NoteTaker from "../assets/img/Screenshots/NT.jpg";

const portfolios = [
  {
    title: "プロジェクト - Trace",
    description:
      "I noticed that many of the stores/restaurants were using paper contact tracing forms to get the details of the customers who visited the store/restaurant. This application helps business create electronic contact forms with their branding and also manage the data acquired to meet the Department of Heath and Human services standard.",
    technology:
      "MERN, Heroku, Material Ui, Passport, Victory, qrcode.react, React color, TippyJs",
    imgSrc: one,
    projectImg: Trace,
    hrefRepoLink: "https://github.com/Suji-GitH/MBC-ProjectThree",
    hrefAppLink: "https://protected-fortress-90500.herokuapp.com/",
  },
  {
    title: "プロジェクト - Personal Fitness Planner",
    description:
      "With recent event of global pandemic, your whole gym routine and schedule are thrown off and with restriction slowly lifting away, people will be getting back at it. However you would need a new routine and schedule to get back to where you were. The application Personal Fitness Planner(PFP) was built as solution to this problem. It simply Generates your personalized fitness plan according to your fitness goal.",
    technology: "Foundation CSS Framework, jQuery, Html, Wger & Quotes API",
    imgSrc: two,
    projectImg: PFP,
    hrefRepoLink: "https://github.com/ben-j-st/projectOne---bootcamp",
    hrefAppLink: "https://ben-j-st.github.io/projectOne---bootcamp/index.html",
  },
  {
    title: "プロジェクト - Password Generator",
    description:
      "This is a Matrix themed random password generator that meets certain criteria to create a strong password that provides greater security. Follow the input textarea description to begin, there are multiple buttons but one of them does a little more than generate the a password!",
    technology: "html, Bootstrap CSS Framework, javascript",
    imgSrc: three,
    projectImg: PassGen,
    hrefRepoLink: "https://github.com/Suji-GitH/MBC-PasswordGenerator",
    hrefAppLink:
      "https://suji-gith.github.io/MBC-PasswordGenerator/Rdm-PassGen.html",
  },
  {
    title: "プロジェクト - Employee Tracker",
    description:
      "A Node application utilizing sql database to view and manage the departments, roles, and employees in my company so that employer can organize and plan their business accordingly.",
    technology: "Node.js & mySQL Workbench 8.0",
    imgSrc: four,
    projectImg: EmployeeTracker,
    hrefRepoLink: "https://github.com/Suji-GitH/MBC-Employee-Tracker",
    hrefAppLink:
      "https://drive.google.com/file/d/1oKntvY9yuWQ0UGPdl37qX0hO6DrrAfu3/view?usp=sharing",
  },
  {
    title: "プロジェクト - Anonymous Web Chat Application",
    description:
      "Digital information has become our part of social life and industrial activity for mankind. However, today's networks are vulnerable to numerous risks, such as information leakage, privacy infringement and data corruption. Through this research, we have developed an anonymous chat application.",
    technology:
      "jQuery, html, express-handlebars, multer, SQL, passport, sequelize, socket.io",
    imgSrc: five,
    projectImg: ChatApp,
    hrefRepoLink: "https://github.com/Suji-GitH/MBC-ProjectTwo",
    hrefAppLink: "https://chirpgram.herokuapp.com/",
  },
  {
    title: "プロジェクト - Note Taker",
    description:
      "A Node application hosted on heroku, that helps user to be able to write, save, and delete notes they have written before. It helps organize users thoughts and keep track of tasks they need to complete.",
    technology: "node.js, Bootstrap CSS Framework, html, javascript",
    imgSrc: six,
    projectImg: NoteTaker,
    hrefRepoLink: "https://github.com/Suji-GitH/MBC-Note-Taker",
    hrefAppLink: "https://thawing-tundra-80064.herokuapp.com/",
  },
];

export default portfolios;
