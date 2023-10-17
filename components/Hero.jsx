import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero hero-bg bg-cover bg-center mt-[3.7rem] px-[10%] relative text-white min-h-[42vw] flex flex-col items-start justify-center">
            <p className="text-[1.1rem] font-light">INDICES</p>
            <h1 className="text-[3rem] font-bold my-4">Combine, Challenge, Conquer!</h1>
            <p className="w-[50%] text-left text-[1.2rem] tracking-[.2px] font-light">Welcome to Indices, where numbers meet strategy in the ultimate puzzle games.
                Merge tiles, double values, and aim for the elusive 8192 tile. Are you up for 
                the challenge?
            </p>
            <Link href="/play" className='bg-white flex my-[2rem] text-[#0045AD] px-5 py-2 rounded-[4px]'>Play Now</Link>
        </div>
    )
}

export default Hero