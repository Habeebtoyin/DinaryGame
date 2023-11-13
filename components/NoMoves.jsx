import Link from "next/link";
import Image from 'next/image'
import GamePassNftContract from "@/sdk/web3";
import { useEthersProvider,useEthersSigner } from "@/sdk/ethersAdapter";
import { GAME_PASS_ADDRESS } from "@/sdk/config";
import { useContext } from "react";
import { GameContext } from "@/hooks/GameContext";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NoMoves = ({score,trackingScore}) => {
     const [isLoading, setisLoading] = useState(false)
     const{
        userGameData,
        setUserGameData,
        updateUserGameData,
        fetchUserGameData,
        isMoveable,
        setIsMoveable,
        isConnected,isConnecting,address,setMoveCounter}=useContext(GameContext)
    const signer=useEthersSigner()
    const provider=useEthersProvider()
    const GamePass= new GamePassNftContract(GAME_PASS_ADDRESS,signer,provider)
    const buyGamePass= async ()=>{
        const currentEpochTime = Math.floor(new Date().getTime() / 1000);
        setisLoading(!isLoading)
       await  GamePass.BuyMove().then(async (res)=>{
        await updateUserGameData(address.toString(), {
			moveUsed: "0",
            moveBought:"30",
            updated_at: currentEpochTime.toString(),
		}).then(async(res)=>{
        const userData=await fetchUserGameData(address)
       // console.log({userData})
        setUserGameData(userData)
        setisLoading(!isLoading)
        setIsMoveable(!isMoveable)
        setMoveCounter(0)
        toast("Successful, 30 moves Minted")
        console.log("nft bought , updated user moves that have been bought")
        })
        
        //then close window
       }).catch(err=>{
       // console.log("buyng nft",JSON.stringify(err))
       toast.error(JSON.parse(JSON.stringify(err)).info.error.data.message)
       })
    }
    return (
        <div className="board-container">
             <ToastContainer />
            <div>
                <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-sm p-8 my-4">
                    <Image
						src="/assets/images/passNft.jpeg"
						alt="Dyelum Logo"
						width={150}
						height={150}
					/>
                    <p className="font-bold"> Dyelum NFT Game Pass</p>
                </div>
                
                <div className="flex flex-col bg-white rounded-sm p-8">
                    <p className="font-bold"> You have no more moves </p>
                    <button onClick={()=>buyGamePass()} className='bg-[#0045AD] text-center text-white px-5 py-2 rounded-[4px] my-4'>{isLoading===true?"Buying More move":"Buy Moves"}</button>
                </div>
            </div>
        </div>
    )
}

export default NoMoves