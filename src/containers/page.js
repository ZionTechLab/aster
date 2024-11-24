import { Container } from 'react-bootstrap';
import './page.css';
// import BackDrop from '../assets/backDrop';

function page(props) {
    return (
        <div className="container_1">
            <div className="container-action-button-1">
                <Container fluid="xxl"  >
                    <div className='container-action-button-2'> 
                        <div className='container-action-button-3'>
                        <button>CLEAR ALL</button>
                        <button>SAVE</button>
                        <button>EDIT</button>
                        <button>NEXT STEP</button>
                        <button>GO BACK</button>
                        </div>
                        </div>
                </Container>
            </div>
            <Container fluid="xxl" className='page' >

                {props.children}
            </Container>
        </div>
    );
}
export default page;