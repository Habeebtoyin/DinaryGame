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
	async SBTBalance(address: string) {
		return await this.SoulBoundfFactory.balanceOf(address);
	}
	async ownerOf(id: string) {
		return await this.SoulBoundfFactory.ownerOf(id);
	}
	async totalSupply() {
		return (await this.SoulBoundfFactory.totalSupply()).toString();
	}
	async tokenByIndex(id: number) {
		return parseInt(
			(await this.SoulBoundfFactory.tokenByIndex(id)).toString()
		);
	}
	async getAlltokensByOwner() {
		let userNft = [];
		const addy = await this.signer.getAddress();
		const _totalSupply = parseInt(await this.totalSupply());
		// console.log({ addy, _totalSupply });
		for (let index = 0; index < _totalSupply; index++) {
			const tokenId = await this.tokenByIndex(index);
			const nft = await this.ownerOf(tokenId.toString());
			if (nft.toString() == addy) {
				userNft.push(tokenId);
			}
		}

		return userNft;
	}
}
