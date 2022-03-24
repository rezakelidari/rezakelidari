import { ISkill } from "../components/Skills";
import IconReact from "../assets/icons/react.svg";
import IconRedux from "../assets/icons/redux.svg";
import IconTypeScript from "../assets/icons/typescript.svg";
import IconBootstrap from "../assets/icons/bootstrap.svg";
import IconSass from "../assets/icons/sass.svg";
import IconAPI from "../assets/icons/api.svg";
import IconFirebase from "../assets/icons/firebase.svg";
import IconCode from "../assets/icons/code.svg";

import { IWork } from "../components/Works";

export const skills: Array<ISkill> = [
  {
    title: "React.js",
    icon: IconReact,
    desc: "React.js, jsx, hooks, Routing & SPA",
  },
  { title: "Redux", icon: IconRedux, desc: "Redux, redux-thunk" },
  { title: "TypeScript", icon: IconTypeScript, desc: "" },
  {
    title: "Bootstrap",
    icon: IconBootstrap,
    desc: "Bootstrap v5, Bootstrap-Icons",
  },
  { title: "Sass", icon: IconSass, desc: ".scss" },
  { title: "API", icon: IconAPI, desc: "RESTful APIs, axios" },
  { title: "Firebase", icon: IconFirebase, desc: "Auth, Analytics" },
  { title: "Html, CSS, JS", icon: IconCode, desc: "HTML5, CSS3, JS(ES6)" },
];

export const works: Array<IWork> = [
  {
    title: "Recipe App",
    image:
      "https://user-images.githubusercontent.com/62962597/159514383-e8026800-2fb6-41c0-bafe-93b363a2c215.png",
    tags: ["React.js", "TypeScript", "Redux", "SPA", "Axios", "RestAPI"],
    github: "https://github.com/rezakelidari/recipe-app",
    demo: "https://recipe-app-kappa-lac.vercel.app/",
  },
  {
    title: "Shopping Cart",
    image:
      "https://user-images.githubusercontent.com/62962597/144320880-c57cfc2f-f5a3-40ce-92c1-06424687ed5b.png",
    tags: ["React.js", "Redux", "RestAPI", "SPA"],
    github: "https://github.com/rezakelidari/shopping-cart",
    demo: "https://shopping-card-sand.vercel.app/",
  },
  {
    title: "FrontEnd Bootcamp",
    image:
      "https://user-images.githubusercontent.com/62962597/151668421-e4990c69-a2cf-4dc2-9ec6-94fa09a19b62.png",
    tags: [
      "React.js",
      "React hooks",
      "Bootstrap v5",
      "Bootstrap Icons",
      "React Bootstrap",
      "Mapbox",
    ],
    github: "https://github.com/rezakelidari/frontend-bootcamp",
    demo: "https://frontend-bootcamp-pink.vercel.app/",
  },
  {
    title: "Creative Agency",
    image:
      "https://user-images.githubusercontent.com/62962597/152167866-67313c6a-31c7-43a4-96f6-5767372ee64c.png",
    tags: [
      "React.js",
      "React hooks",
      "Sass",
      "Bootstrap v5",
      "Bootstrap Icons",
      "React Bootstrap",
    ],
    github: "https://github.com/rezakelidari/creative-agency",
    demo: "https://creative-agecy.vercel.app/",
  },
  {
    title: "Coin Rank",
    image:
      "https://user-images.githubusercontent.com/62962597/156441321-52bbde78-3bcd-4b62-a789-d38fd9a0642a.png",
    tags: ["React.js", "React hooks", "Sass", "RestAPI"],
    github: "https://github.com/rezakelidari/coin-rank",
    demo: "https://coin-rank.vercel.app/",
  },
  {
    title: "Pay+",
    image:
      "https://user-images.githubusercontent.com/62962597/141614670-3e4ebb92-5f75-4f90-b6bd-5186dc06333f.png",
    tags: ["React.js", "React hooks", "SPA"],
    github: "https://github.com/rezakelidari/pay-plus",
    demo: "https://pay-plus.vercel.app/",
  },
  {
    title: "Whatsapp Plus",
    image:
      "https://user-images.githubusercontent.com/62962597/142188788-04b85e09-8013-48cd-9723-2aadfad66263.png",
    tags: ["React.js", "Firebase Auth", "SPA", "React chat engine"],
    github: "https://github.com/rezakelidari/whatsapp-plus",
    demo: "https://whatsapp-plus.vercel.app/",
  },
  {
    title: "Oxy Gym",
    image:
      "https://user-images.githubusercontent.com/62962597/143079593-8271d66b-f56c-4b87-86b4-c03a8065eeb3.png",
    tags: ["React.js", "React hooks", "SPA"],
    github: "https://github.com/rezakelidari/oxi-gym",
    demo: "https://oxi-gym.vercel.app/",
  },
  {
    title: "Covid-19 Tracker",
    image:
      "https://user-images.githubusercontent.com/62962597/142261472-e2a9aa40-4ec9-4062-86b7-0a48ad5dee06.png",
    tags: ["React.js", "React hooks", "RestAPI"],
    github: "https://github.com/rezakelidari/covid-tracker",
    demo: "https://covid-tracker-seven-plum.vercel.app/",
  },
  {
    title: "Form Validation",
    image:
      "https://user-images.githubusercontent.com/62962597/142651766-e9452995-c2a5-47eb-9c96-46b2e91ec7d8.png",
    tags: ["React.js", "React hooks", "Firebase Auth"],
    github: "https://github.com/rezakelidari/form-validation",
    demo: "https://form-validation-liart.vercel.app/",
  },
  {
    title: "Simple Todo",
    image:
      "https://user-images.githubusercontent.com/62962597/141681250-577f0f80-e69e-4372-8c07-b00f78cda8c8.png",
    tags: ["React.js", "React hooks"],
    github: "https://github.com/rezakelidari/simple-todo",
    demo: "https://simple-todo-one.vercel.app/",
  },
];
