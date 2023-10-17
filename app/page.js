import Hero from '@/components/Hero'
import HomeAbout from '@/components/HomeAbout'
import HomeFeatures from '@/components/HomeFeatures'
import GameMode from '@/components/GameMode'
import HomeGetStarted from '@/components/HomeGetStarted'
import Leaderboard from '@/components/Leaderboard'


export default function Home() {
  return (
    <div>
    
      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <HomeAbout />

      {/* Features section */}

      <HomeFeatures />

      {/* Game modes section */}

      <GameMode />

      {/* Get Started Section */}
      
      <HomeGetStarted />

      {/* Leaderboard Section */}

      <Leaderboard title={"All-Time Leaderboard"} heading={"Leaderboard"} subheading={"Game-specific rankings"}/>
    </div>
  )  
}
