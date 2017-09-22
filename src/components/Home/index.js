import R from 'ramda'
import Container from '../Container'
import LiquorWrapper from '../LiquorWrapper'
import Liquor from '../Liquor'

const liquors = R.map((el) => ({
  id: el,
  name: 'Buy milk',
  img: 'Buy milk',
  value: 30
}), R.range(0,20));
const HomeProto = R.compose(Container, LiquorWrapper, R.map(Liquor))

const Home = (children) => (HomeProto(liquors))


export default Home
