import { NftPass, NftPass__factory } from "@/types/contracts";
import { Provider, parseEther } from "ethers";
import { Signer } from "ethers";
import { AddressLike } from "ethers";

export default class GamePassNftContract {
	SignerFactory: NftPass;
	signer;
	constructor(nftPassAddress: string, signer: Signer, Provider: Provider) {
		const getFactoryWithSigner = NftPass__factory.connect(
			nftPassAddress,
			signer
		);
		this.SignerFactory = getFactoryWithSigner;
		this.signer = signer;
	}
	async BuyMove() {
		return await this.SignerFactory.mint(
			await this.signer.getAddress(),
			1,
			{
				value: parseEther("0.005"),
			}
		);
	}
	async burnNft(_amount: number) {
		return await this.SignerFactory.burn(
			await this.signer.getAddress(),
			1,
			_amount
		);
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
}
