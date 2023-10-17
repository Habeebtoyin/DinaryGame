const HomeFeatures = () => {
    return (
        <div className="my-[2em] mb-[4em] text-center px-[10%] res-pad-in">
            <h1 className="res-font font-bold text-[2.5rem]">Key Features</h1>
            <p>Discover Indices impresive key features</p>
            <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-4 my-[2em]">
                <div className="box">
                    <div className="bg-[#E5EFFF] inline-block px-4 py-2 text-[#0045AD]">1</div>
                    <div className="my-[1rem] font-bold text-[1.3rem] text-[#333943]">Engaging Gameplay</div>
                    <p className="text-[#464D59]">Swipe in four directions (up, down, left, right) to move the tiles. When two tiles with the same values collide,
                        they merge into a single tile with double the value. The goal is to keep merging the tiles and work
                        your way up to the coveted 12288 tile
                    </p>
                </div>
                <div className="box">
                    <div className="bg-[#E5EFFF] inline-block px-4 py-2 text-[#0045AD]">2</div>
                    <div className="my-[1rem] font-bold text-[1.3rem] text-[#333943]">Beautiful Design</div>
                    <p className="text-[#464D59]">
                        Immerse yourself in a visually pleasing and colorful world of numbers. As tiles merge and values
                        increase, you'll witness a mesmerizing transformation of the game board
                    </p>
                </div>
                <div className="box">
                    <div className="bg-[#E5EFFF] inline-block px-4 py-2 text-[#0045AD]">3</div>
                    <div className="my-[1rem] font-bold text-[1.3rem] text-[#333943]">Compete and Conquer</div>
                    <p className="text-[#464D59]">Challenge yourself and compete with players from all around the world. Can you
                        achieve the highest score and secure a top spot on the leaderboard?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeFeatures