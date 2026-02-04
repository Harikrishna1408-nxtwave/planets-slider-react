import Slider from 'react-slick'
import PlanetItem from '../PlanetItem/index'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="planets-slider-container">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem
            key={planet.id}
            planetDetails={planet}
          />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
