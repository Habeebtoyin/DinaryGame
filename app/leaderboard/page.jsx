import LeaderBoardHero from "@/components/LeaderBoardHero"
import Leaderboard from "@/components/Leaderboard"

const LeaderboardPage = () => {
    return (
        <div>
            <LeaderBoardHero />
            <Leaderboard title={"Leaderboard"} heading={"All-Time Leaderboard"} subheading={"The Leaderboard is on-chain, so you must submit your game to display it here"}/>
        </div>
    )
}

export default LeaderboardPage