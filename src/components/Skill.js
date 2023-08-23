import { Col } from "react-bootstrap";

export const Skill = ({ title, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={1}>
            <div className="skill-imgbx">
                <img
                    src={imgUrl}
                    alt={title}
                    style={title === "Hardhat" || title === "Web3" || title === "OpenZeppelin" || title === "Solana" || title === "Polygon" || title === "HTML" ? {
                        height: "5.5rem",
                        width: "5.2rem"
                    } : {}}
                />
                <div className="proj-txtx">
                    <h6>{title}</h6>
                </div>
            </div>
        </Col>
    )
}
