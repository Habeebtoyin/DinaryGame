export function trimWalletAddress(walletAddress: string, length = 8) {
	if (walletAddress.length <= length) {
		return walletAddress; // No need to trim if it's shorter than the specified length
	}
	const start = walletAddress.slice(0, length);
	const end = walletAddress.slice(-length);
	const trimmedAddress = `${start}...${end}`;
	return trimmedAddress;
}
