const AdminNFT = () => {
    return (
        <div className="flex flex-col justify-between w-[33%] max-lg:w-[100%]">
            <div className="bg-[#FFF0E6] w-[100%] text-center rounded-lg py-3">
                <p className="font-bold text-[1.5rem]">1000</p>
                <p className="font-bold">NFT's Minted</p>
                <p className="text-[#6E7887]">20% increase from last week</p>
            </div>

            <div className="bg-[#C9D2E1] w-[100%] text-center rounded-lg max-lg:my-[1rem] py-3">
                <p className="font-bold text-[1.5rem]">1000</p>
                <p className="font-bold">NFT's Burned</p>
                <p className="text-[#6E7887]">20% increase from last week</p>
            </div>

            <div className="bg-[#59E6F6] w-[100%] text-center rounded-lg py-3">
                <p className="font-bold text-[1.5rem]">1000</p>
                <p className="font-bold">NFT's Traded</p>
                <p className="text-[#6E7887]">20% increase from last week</p>
            </div>
        </div>
    )
}

export default AdminNFT