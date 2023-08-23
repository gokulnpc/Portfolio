import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Skill } from "./Skill";
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
export const Skills = () => {

  const projects = [
    {
      title: "Solidity",
      imgUrl: Solidity,
    },
    {
      title: "JavaScript",
      imgUrl: js,
    },
    {
      title: "TypeScript",
      imgUrl: ts,
    },
    {
      title: "Node.js",
      imgUrl: node,
    },
    {
      title: "React",
      imgUrl: react,
    },
    {
      title: "Ethereum",
      imgUrl: eth,
    },
    {
      title: "Solana",
      imgUrl: solana,
    },
    {
      title: "Polygon",
      imgUrl: polygon,
    },
    {
      title: "Tron",
      imgUrl: tron,
    },
    {
      title: "Metamask",
      imgUrl: metamask,
    },
    {
      title: "Hardhat",
      imgUrl: hardhat,
    },
    {
      title: "Truffle",
      imgUrl: truffle,
    },
    {
      title: "IPFS",
      imgUrl: ipfs,
    },
    {
      title: "Ganache",
      imgUrl: ganache,
    },
    {
      title: "OpenZeppelin",
      imgUrl: oz,
    },
    {
      title: "Web3",
      imgUrl: web3,
    },
    {
      title: "ChatGPT",
      imgUrl: chatgpt,
    },
    {
      title: "HTML",
      imgUrl: html,
    },
    {
      title: "C++",
      imgUrl: c,
    },
    {
      title: "Java",
      imgUrl: java,
    },
    {
      title: "Git",
      imgUrl: git,
    },
    {
      title: "npm",
      imgUrl: npm,
    },
    {
      title: "Mongodb",
      imgUrl: mongo,
    },
    {
      title: "Rust",
      imgUrl: rust,
    },
  ];

  return (
    <section className="project skills" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2>
                  <p>What I Can Do!</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <Skill
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
