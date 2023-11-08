import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import HomeAbout from '@/components/HomeAbout'
import HomeFeatures from '@/components/HomeFeatures'
import GameMode from '@/components/GameMode'
import HomeGetStarted from '@/components/HomeGetStarted'
import Leaderboard from '@/components/Leaderboard'
import UserProfileCard from '@/components/UserProfileCard'


export default function Home() {
  return (
    <div>

      <Layout>

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

        <Leaderboard title={"All-Time Leaderboard"} heading={"Leaderboard"} subheading={"Game-specific rankings"} />

        {/* <UserProfileCard /> */}

      </Layout>
    </div>
  )
}
