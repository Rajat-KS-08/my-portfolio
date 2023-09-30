"use client";
import React, {useRef} from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

//Importing Images
import ssChatApp from "../../assets/projects/ssChat.png";
import ssCryptoApp from "../../assets/projects/ssCryptoS.png";
import ssEcomApp from "../../assets/projects/ssEcom.png";
import ssFoodApp from "../../assets/projects/ssFoodCart.png";
import ssGittyApp from "../../assets/projects/ssGitty.png";
import ssRGBApp from "../../assets/projects/ssRGB.png";
import ssTTTApp from "../../assets/projects/ssTicTacToe.png";
import ssWeatherApp from "../../assets/projects/ssWeather.png";

const projectsData = [
    {
        id : 1,
        title : "A Chat app",
        description : "A simple chat application is built using react-chat-engine to explore how to develope a chat aplication.",
        image : ssChatApp,
        appUrl : "https://simple-react-chatapp.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/chat-app"
    },
    {
        id : 2,
        title : "A Cryptocurrency info app",
        description : "A cryptocurrency info application is built mainly using Redux Toolkit Query, Redux Toolkit, Ant Design and react-router-dom.",
        image : ssCryptoApp,
        appUrl : "https://cryptosreactapp.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/cryptos"
    },
    {
        id : 3,
        title : "An E-Commerce Applictaion",
        description : "An E-Commerce application is built mainly using Context-API, react-router-dom, Google Firebase. It has the features of Login, Logout, Add to cart, Remove from the cart, Place an order, Displaying notification on successfule order placement.",
        image : ssEcomApp,
        appUrl : "https://ecom123-app.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/e-commerce-app"
    },
    {
        id : 4,
        title : "A Github Profile info fetching app",
        description : "A react applictaion which is having the features of authentication, fetching the data of a Github profile, displaying the repositories of that profile owner. The app has been built using mainly firestore, axios, react-router-dom, Context API.",
        image : ssGittyApp,
        appUrl : "https://github-firebase-app.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/github-firebase-app"
    },
    {
        id : 5,
        title : "A Food Cart app",
        description : "A simple react application having the functionaliy of adding Food item into the cart and displaying the details of the cart through a modal.",
        image : ssFoodApp,
        appUrl : "https://foodcartreact.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/food-kart"
    },
    {
        id : 6,
        title : "A Weather info app",
        description : "A simple weather details fetching app is built using fetch API and reactstrap.",
        image : ssWeatherApp,
        appUrl : "https://rajat-ks-08.github.io/weather-app/",
        githubUrl : "https://github.com/Rajat-KS-08/weather-app"
    },
    {
        id : 7,
        title : "Tic Tac Toe Game app",
        description : "A simple tic tac toe game app using React.",
        image : ssTTTApp,
        appUrl : "https://tictactoerks.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/tic-tac-toe-2.0"
    },
    {
        id : 8,
        title : "RGB Color Code guessing game",
        description : "A simple RGB Color COde Guessing game using Vanilla JavaScript, CSS and HTML.",
        image : ssRGBApp,
        appUrl : "https://rgbjs.netlify.app/",
        githubUrl : "https://github.com/Rajat-KS-08/Color-Guessing-Game"
    }
];

const ProjectsSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once : true});
  const cardVariants = {
    initial : { y: 50, opacity: 0, rotateX:0 },
    animate : { y: 0, opacity: 1, rotateX:360 }
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {
            projectsData?.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                <ProjectCard 
                  key={project.id} 
                  title={project.title} 
                  description={project.description} 
                  ss={project.image} 
                  appUrl={project.appUrl} 
                  gitUrl={project.githubUrl}
                />
              </motion.li>
            ))
        }
      </ul>
    </section>
  )
}

export default ProjectsSection
