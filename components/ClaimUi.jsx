import ClaimUiComp from './ClaimUiComp'

const ClaimUi = () => {
    return (
        <div className="bg-black flex justify-center py-6 max-lg:p-4">
            <div>
                <ClaimUiComp title={'Get 1ETH and 1 Legendary NFT'} desc={'Burn your 3 indices Master NFT to claim 1 indices Legandary NFT'} linkName={'Mint Now'} link={'/'} image={'/assets/images/Group.png'}/>
            </div>
        </div>
    )
}

export default ClaimUi