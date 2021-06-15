import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Glide from 'react-glidejs';

import DisneyLogo from '../assets/disney-logo.svg';
import StarWarsLogo from '../assets/star-wars-logo.png';
import MarvelLogo from '../assets/marvel-logo.png';
import PixarLogo from '../assets/pixar-logo.svg';
import NatGeoLogo from '../assets/nat-geo-logo.svg'
import Mulan from '../assets/Mulan.jpg'


const Main = () => {
  const gliderRef = useRef(null);

  return (
    <div className="container mx-auto">
      <div className="my-8">
        <Glide
          ref={gliderRef}
          throttle={30}
          type="carousel"
          autoplay={10000}
          bullet={true}
          customSlideAnimation={{
            timeout: 3000,
            classNames: 'fade',
          }}
          peek={{
            before: 50,
            after: 50,
          }}
          perView={1}
          startAt={0}
          slideClassName="slider__frame"
          focusAt="center"
        >
          <Link to="/about" className="mb-12 w-full" style={{ display: 'block', height: '50vh' }}>
            <img src='../assets/mandalorian-slide.jpg' alt="mandalorian" className="w-full h-full object-cover rounded" />
          </Link>
          <Link to="/about" className="mb-12 w-full" style={{ display: 'block', height: '50vh' }}>
            <img src='../assets/mandalorian-slide.jpg' alt="mandalorian" className="w-full h-full object-cover rounded" />
          </Link>
          <Link to="/about" className="mb-12 w-full" style={{ display: 'block', height: '50vh' }}>
            <img src='../assets/mandalorian-slide.jpg' alt="mandalorian" className="w-full h-full object-cover rounded" />
          </Link>
        </Glide>

        <div className="categories flex items-center mb-12">
          <div className="w-1/5 px-4">
            <a href="#disney" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 border border-gray-500 shadow-custom hover:bg-gray-900">
              <img src={DisneyLogo} alt="disney logo" />
            </a>
          </div>
          <div className="w-1/5 px-4">
            <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 border border-gray-500 shadow-custom hover:bg-gray-900">
              <img src={PixarLogo} alt="pixar logo" />
            </a>
          </div>
          <div className="w-1/5 px-4">
            <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 border border-gray-500 shadow-custom hover:bg-gray-900">
              <img src={MarvelLogo} alt="marvel logo" />
            </a>
          </div>
          <div className="w-1/5 px-4">
            <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 border border-gray-500 shadow-custom hover:bg-gray-900">
              <img src={StarWarsLogo} alt="Star Wars logo" />
            </a>
          </div>
          <div className="w-1/5 px-4">
            <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 border border-gray-500 shadow-custom hover:bg-gray-900">
              <img src={NatGeoLogo} alt="Nat Geo logo" />
            </a>
          </div>
        </div>

        <div className="recommended px-6 mb-12">
          <h2 className="text-gray-500 mb-1">Recommended For You</h2>
          <Glide
            ref={gliderRef}
            throttle={0}
            type="carousel"
            gap={20}
            customSlideAnimation={{
              timeout: 500,
              classNames: 'fade',
            }}
            peek={{
              before: 0,
              after: 70,
            }}
            perView={5}
            startAt={0}
            slideClassName="slider__frame"
            focusAt="center"
            breakpoints={{
              1024: {
                perView: 3
              },
              800: {
                perView: 2
              },
              576: {
                perView: 1,
                peek: {
                  before: 0,
                  after: 0
                }
              },
            }}
          >
            <Link className="shadow-xl  block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
            <Link className="shadow-xl block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
            <Link className="shadow-xl block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
            <Link className="shadow-xl block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
            <Link className="shadow-xl block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
            <Link className="shadow-xl block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
            <Link className="shadow-xl block" to="/">
              <img className="h-full" src={Mulan} alt="testing" />
            </Link>
          </Glide>
        </div>

        <div className="recommended px-6 mb-12">
          <h2 className="text-gray-500 mb-1">Continue Watching</h2>
          <div className="flex items-center">
            <div className="shadow-xl mr-6">
              <a href="/">
                <img src={Mulan} alt="testing" />
              </a>
            </div>
            <div className="shadow-xl mr-6">
              <a href="/">
                <img src={Mulan} alt="testing" />
              </a>
            </div>
            <div className="shadow-xl mr-6">
              <a href="/">
                <img src={Mulan} alt="testing" />
              </a>
            </div>
            <div className="shadow-xl mr-6">
              <a href="/">
                <img src={Mulan} alt="testing" />
              </a>
            </div>
            <div className="shadow-xl mr-6">
              <a href="/">
                <img src={Mulan} alt="testing" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
