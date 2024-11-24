import "./assets.css";
import Polygon1 from './Polygon1.svg';
import Polygon2 from './Polygon2.svg';
import Container from 'react-bootstrap/Container';

function backDrop() {
    return (
            <div className="backDrop_container">
                {/* <Container fluid>    */}
                    <img className="triangleRight" src={Polygon2} alt="Your SVG" />
                    <img className="triangleLeft" src={Polygon1} alt="Your SVG" />
                {/* </Container> */}
            </div>
    );
}
export default backDrop;