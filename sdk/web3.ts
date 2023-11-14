import {
	NftPass,
	NftPass__factory,
	SoulBound,
	SoulBound__factory,
} from "@/types/contracts";
import { Provider, parseEther } from "ethers";
import { Signer } from "ethers";
import { AddressLike } from "ethers";

export default class GamePassNftContract {
	SignerFactory: NftPass;
	signer;
	SoulBoundfFactory: SoulBound;
	constructor(nftPassAddress: string, signer: Signer, Provider: Provider) {
		const getFactoryWithSigner = NftPass__factory.connect(
			nftPassAddress,
			signer
		);
		this.SignerFactory = getFactoryWithSigner;
		this.SoulBoundfFactory = SoulBound__factory.connect(
			nftPassAddress,
			signer
		);
		this.signer = signer;
	}
	async BuyMove() {
		return await this.SignerFactory.mint(
			await this.signer.getAddress(),
			1,
			{
				value: parseEther("30"),
			}
		);
	}
	async burnNft(_tokenId: number) {
		return await this.SoulBoundfFactory.burn(_tokenId);
	}
	async transferNft(_amount: string, to: string) {
		return await this.SignerFactory.safeTransferFrom(
			await this.signer.getAddress(),
			to,
			1,
			_amount,
			"0x00"
		);
	}

	async claimSBT() {
		return await this.SoulBoundfFactory.safeMint();
	}
}
