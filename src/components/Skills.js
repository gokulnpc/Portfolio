import React, { useState } from 'react';
import './Skills.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // You may need to install react-tabs
import 'react-tabs/style/react-tabs.css';

import projImg1 from "../assets/img/project-img1.png";
import Solidity from "../assets/img/Solidity.svg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import rust from "../assets/img/rust.svg";
import js from "../assets/img/js.svg";
import ts from "../assets/img/ts.svg";
import node from "../assets/img/node.svg";
import react from "../assets/img/react.svg";
import npm from "../assets/img/npm.svg";
import java from "../assets/img/java.svg";
import git from "../assets/img/git.svg";
import mongo from "../assets/img/mongo.svg";
import eth from "../assets/img/eth.svg";
import truffle from "../assets/img/truffle.svg";
import hardhat from "../assets/img/hardhat.svg";
import ipfs from "../assets/img/ipfs.svg";
import metamask from "../assets/img/metamask.svg";
import web3 from "../assets/img/web3.svg"
import ganache from "../assets/img/ganache.svg"
import oz from "../assets/img/openzeppelin.svg";
import chatgpt from "../assets/img/chatgpt.svg";
import c from "../assets/img/c.svg";
import solana from "../assets/img/solana.svg";
import polygon from "../assets/img/polygon.svg";
import tron from "../assets/img/tron.svg";
import html from "../assets/img/html.svg";

import python from "../assets/img/python.png";
import database from "../assets/img/database.png";
import hedera from "../assets/img/hedera.png";
import binance from "../assets/img/binance.png";
import ex from "../assets/img/exp.png";
import panda from "../assets/img/pandas.png";
import numpy from "../assets/img/numpy.png";
import mat from "../assets/img/mat.png";
import sci from "../assets/img/sci.jpg";
import tns from "../assets/img/tns.png";
import postman from "../assets/img/postman.png";
const Skills = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const skillsData = {
    "Blockchain Technologies": [
      { name: 'Solidity', icon: Solidity },
      { name: 'Hardhat', icon: hardhat },
      { name: 'Truffle', icon: truffle },
      { name: 'IPFS', icon: ipfs },
      { name: 'Metamask', icon: metamask },
      { name: 'Web3.js', icon: web3 },
      { name: 'Ganache', icon: ganache }
      // ... other skills with their respective data
    ],

    "Blockchain Networks": [
      { name: 'Ethereum', icon: eth },
      { name: 'Polygon', icon: polygon },
      { name: 'Solana', icon: solana },
      { name: 'Hedera', icon: hedera },
      { name: 'Binance', icon: binance }
    ],

    "Programming Languages": [
      { name: 'JavaScript', icon: js },
      { name: 'Python', icon: python },
      { name: 'MySQL', icon: database },
      { name: 'C++', icon: c },
      { name: 'HTML', icon: html },
    ],

    "Frameworks and Tools": [
      { name: 'ReactJS', icon: react },
      { name: 'Node.js', icon: node },
      { name: 'Express.js', icon: ex },
      { name: 'MongoDB', icon: mongo },
      { name: 'Git', icon: git },
      { name: 'NPM', icon: npm },
      { name: 'Postman', icon: postman },
    ],

    "Machine Learning": [
      { name: 'Pandas', icon: panda },
      { name: 'NumPy', icon: numpy },
      { name: 'Matplotlib', icon: mat },
      { name: 'Scikit-Learn', icon: sci },
      { name: 'TensorFlow', icon: tns },
      { name: 'ChatGPT', icon: chatgpt }
    ]
    // ... other categories with their skills
  };

  const getSkillCards = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-card">
        <img src={skill.icon} alt={skill.name} className="skill-icon" />
        <h3 className="skill-name">{skill.name}</h3>
      </div>
    ));
  };

  const tabStyle = {
    textDecoration: 'none', // This will remove the underline
    // Add any other styles you want here
  };

  // ...




  return (
    <section className="skills-container">
      <h1 className="about-heading title"><span>My Tech Stack 🚀</span></h1>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          {Object.keys(skillsData).map((category, index) => (
            <Tab style={tabStyle} key={index}>{category}</Tab>
          ))}
        </TabList>

        {Object.values(skillsData).map((skills, index) => (
          <TabPanel key={index}>
            <div className="grid-container">
              {getSkillCards(skills)}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default Skills;
