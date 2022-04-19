import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import styled, { css } from 'styled-components';

export function Projects() {
  const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 430px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

  const Arrow = styled.div`
text-shadow: 1px 1px 1px #fff;
z-index: 100;
line-height: 430px;
text-align: center;
position: absolute;
top: 0;
width: 10%;
font-size: 3em;
cursor: pointer;
user-select: none;
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

  const CarouselUI = ({ position, handleClick, children }) => (
    <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);
  return (
    <div className='container'>
      <h2 className='container-heading'>Projects</h2>
      <Carousel defaultWait={2000}>
        <Slide right>
          <div>
            <a href='https://naughty-bose-562c1a.netlify.app/' target='_blank'>
              <img className='carousel-image' src='https://gumlet.assettype.com/newslaundry/2020-08/ecd66834-ea1b-401b-863a-83ab992aa77f/Mandir_Newspaper_Coverage_AI.jpg?w=1200&h=675'></img>
            </a>
            <h4 className='carousel-heading'>Newspaper</h4>
            <h5 className='carousel-content'>Using HTML, CSS & Bootstrap</h5>
          </div>
        </Slide>
        <Slide right>
          <div>
            <a href='https://vigilant-borg-515799.netlify.app/' target='_blank'>
              <img className='carousel-image' src='https://www.princetonreview.com/cms-content/CanYouUseCalculatoronGMAT.jpg'></img>
            </a>
            <h4 className='carousel-heading'>DOM Calculator</h4>
            <h5 className='carousel-content'>Using HTML, CSS, Bootstrap, Javascript & DOM</h5>
          </div>
        </Slide>
        <Slide right>
          <div>
            <a href='https://gifted-poincare-74d376.netlify.app/' target='_blank'>
              <img className='carousel-image' src='https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg'></img>
            </a>
            <h4 className='carousel-heading'>Recipes App</h4>
            <h5 className='carousel-content'>CRUD operations using React Js with API & Form Validations</h5>
          </div>
        </Slide>
      </Carousel>
    </div>
  );
}
