import { Col } from "react-bootstrap";

export const Skill = ({ title, imgUrl }) => {
    return (
        <Col size={12} sm={2} md={1} xs={2}>
            <div className="skill-imgbx">
                <img
                    src={imgUrl}
                    alt={title}
                    style={
                        (title === "Hardhat" ||
                            title === "Web3" ||
                            title === "OpenZeppelin" ||
                            title === "Solana" ||
                            title === "Polygon" ||
                            title === "HTML") &&
                            window.innerWidth >= 768 // Check if screen width is greater than or equal to 768px (md breakpoint)
                            ? {
                                height: "5.5rem",
                                width: "5.2rem",
                            }
                            : {}
                    }
                />
                <div className="proj-txtx">
                    <h6>{title}</h6>
                </div>
            </div>
        </Col>
    )
}
