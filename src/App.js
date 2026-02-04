import PlanetsSlider from './components/PlanetsSlider'

const planetsList = [
  {
    id: 'MERCURY',
    name: 'Mercury',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/mercury-img.png',
    description:
      'Mercury is the smallest planet in our solar system and closest to the Sun.',
  },
  {
    id: 'VENUS',
    name: 'Venus',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/venus-img.png',
    description:
      'Venus spins slowly in the opposite direction from most planets.',
  },
  {
    id: 'EARTH',
    name: 'Earth',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/earth-img.png',
    description:
      'Earth is the only place known so far that supports life.',
  },
  {
    id: 'MARS',
    name: 'Mars',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/mars-img.png',
    description:
      'Mars is a dusty, cold desert world with a thin atmosphere.',
  },
]

const App = () => <PlanetsSlider planetsList={planetsList} />

export default App
