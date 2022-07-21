import { useState } from 'react'
import { NowPlaying } from '../components/Home/NowPlaying'
import { NowPlayingList } from '../components/Home/NowPlayingList'
import { Popular } from '../components/Home/Popular'
import { PopularList } from '../components/Home/PopularList'
import { UpcomingList } from '../components/Home/UpcomingList'
import { MishContext } from '../context/MishContext'

export const HomeScreen = () => {
  interface state{
    id: Number
  }
  const [idDetails, setIdDetails] = useState<state[]>()

  return (
    <MishContext.Provider value={{
      idDetails, setIdDetails
    }}>
      <Popular />
      <PopularList />
      <UpcomingList />
      <NowPlaying />
      <NowPlayingList />
    </MishContext.Provider>
  )
}
