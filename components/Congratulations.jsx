import Image from "next/image"
import Link from "next/link";

const Congratulations = () => {
    return (
        <div className="flex flex-col gap-3 items-center bg-white text-center p-9 rounded-[5px]">

            <div>
                <Image
                    src="/assets/images/Frame82.png"
                    alt="Dyelum img"
                    width={80}
                    height={80}
                    className="rounded-sm mt-[.2em]"
                />
            </div>
            
            <h1 className="font-bold text-[1.2rem]">Congratulations</h1>
            
            <p className="text-[#6E7887]">Your 1 ETH will be deposited into your wallet within 3 business days</p>

            <div className="flex justify-start mt-3 ">
                <Link href="#" className='bg-[#0045AD] flex align-middle text-white px-5 py-2 rounded-[4px]'>Send Reward</Link>
            </div>
        </div>
    )
}

export default Congratulations