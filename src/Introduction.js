import 'bootstrap/dist/css/bootstrap.css';
import { Badge } from 'react-bootstrap';
import './Introduction.css';
import starIcon from './images/yellow-star-icon-21.png';
import photo from './images/anonpic.jpg';
import cpu from './images/cpu.png';
import music from './images/3462291.png';
import baseball from './images/baseball-16.png';
import Image from 'react-bootstrap/Image'

export default function Introduction() {
    return (
        <div className='jumbotron'>
            <div className='intro-content'>
                <div className='left'>
                    <div className='about-me' id='about'>
                        <img src={starIcon} className='star-image'></img>
                        <h1 className='about-header'>About Me</h1>
                        <img src={starIcon} className='star-image'></img>
                    </div>
                    <h4><Badge pill bg="light">1</Badge> My name is [student], and I'm a [class year] at Brown University currently taking CSCI1300, a class
                        on user interfaces and user experience. I'm a functional web app designer focused on making fun, useful,
                        and accessible tools.
                    </h4>
                    <div className='image-icon-container'>
                        <Image src={photo} roundedCircle className='me'></Image>
                        <img src={baseball} className='baseball-image'></img>
                    </div>
                    <h4 className='interests'><Badge pill bg="light">3</Badge> I also enjoy chess, music, swimming, and baseball. :)</h4>
                </div>
                <div className='right'>
                    <img src={cpu} className='cpu-image'></img>
                    <h4 className='info'><Badge pill bg="light">2</Badge> This semester, I've worked on several projects and have improved my skills with frontend development.
                        I also got the opportunity to practice certain aspects of the UX design process like prototyping and A/B
                        testing. Overall, I try to keep my work fun and engaging for users. Feel free to check out what I've
                         done below!
                    </h4>
                    <img src={music} className='music-image'></img>
                </div>
            </div>
        </div>
    );
}