import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from './component/SearchBar'
import Screen from './component/Screen'
import SmallCard from './component/SmallCard'
import BreakingNews from './component/BreakingNews'
import data from "./component/fakeData"
import FeaturedNews from './component/FeaturedNews'
import TechNews from './component/TechNews'
import FlatCard from './component/FlatCard'
import PoliticalNews from './component/PoliticalNews'
import EntertainmentNews from './component/EntertainmenNews'
import NewsDetails from './component/NewsDetails'
import NewsList from './component/NewsList'
const Home = () => {
  const BreakingNewsh = data.filter(item => item.category === 'breaking-news')
  const TechNewsh = data.filter(item => item.category === 'tech')
  const Political = data.filter(item => item.category === 'political')
  const entertainment = data.filter(item => item.category === 'entertainment')
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={
        {
          "title": "KTM Launches New Bike in The Market",
          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
          "category": "tech",
          "id": "1596258409985",
          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",
          "thumbnail": require("../assetws/1596258409985-ktm.jpg")
        }
      } />
      <BreakingNews data={BreakingNewsh} />
      <TechNews data={TechNewsh} />
      <PoliticalNews item={Political} />
      <EntertainmentNews item={entertainment} />
    </Screen>
  //  <NewsList/>
  )
}

export default Home