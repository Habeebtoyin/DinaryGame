import Image from 'next/image'
import Link from "next/link";

const GameModeCard = ({title, body, link, image, mode}) => {
    return (
        <div className="game-card shadow-md rounded-[4px]">        
            <div className="game-img-con">
                <Image
                    src={image}
                    alt="game-card-img"
                    width={320}
                    height={320}
                    className="game-image" 
                />
            </div>
            <div className="p-3 flex flex-col justify-between">
                <div>
                    <h3 className="text-left my-2 font-bold text-[1.3rem]">{title}</h3>
                    <p className="text-left my-2 ">{body}</p>
                </div>
                
                <div className="">
                    {
                        mode == "active" ? (
                            <div className="flex justify-start mt-3 ">
                                <Link href={link} className='bg-[#0045AD] flex align-middle text-white px-5 py-2 rounded-[4px]'>Play Now</Link>
                            </div>
                        ) : 
                        
                        (
                            <div className="flex justify-start mt-3 ">
                                <p className='bg-white flex align-middle text-[#0045AD] px-5 py-2 rounded-[4px] border border-[#0045AD]'>Coming Soon</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default GameModeCard