const fs = require("fs");
const colors = [15871728, 7568050, 4569411, 11405820, 3360049, 16138689, 136997, 4120913, 11713506, 3630703, 4933811, 10076521, 4682532, 14276975, 11188703, 13548226, 10560208, 6185744, 15110461, 13069540, 5951360, 3606005, 5455418, 3615956, 16085792, 6891072, 2622815, 2786648, 15987782, 15805679, 4584786, 6755357, 7993420, 3103294, 16110926, 8880212, 10754187, 4394690, 13232441, 2358177, 2326725, 2340918, 1419388, 13933594, 5880400, 14773509, 3018072, 11686040, 5792667, 11480749, 15215219, 3269142, 7174422, 14048782, 3558346, 5584033, 439842, 5471193, 6004717, 12764574, 10956759, 11604872, 15412043, 3360502, 3033330, 9731527, 2179295, 12045939, 7651001, 14423041, 12559293, 1830908, 9376175, 7025247, 5776135, 101028, 1725974, 11520066, 16041247, 11486509, 14749352, 3953596, 13876629, 7445714, 11272037, 3435077, 2960009, 9203116, 13505402, 435716, 3266341, 3905439, 4769440, 7259741, 329864, 3985302, 11408032, 8331341, 7647232, 1079598];

/*
{
"name": "Stack Stack Stack #88",
"description": "Stack NFTs on Oasis Network",
"image": "ipfs://QmZhXzV17CHY2pLP2KKWYrikv9Hbnvmk6dsk96HqtWfa8u/88.png",
"edition": 1,
"attributes": [],
}
*/

for (let i = 0; i < colors.length; i++) {
  const json = {
    name: `Oasis Stack #${colors[i]}`,
    description: "Stack NFTs on Oasis Network",
    image: `https://github.com/oasis-stack/stack/blob/main/img/${colors[i]}.png?raw=true`,
    edition: 1,
    attributes: [
      {
        trait_type: "id",
        value: colors[i],
      },
      {
        trait_type: "hex",
        value: "#" + colors[i].toString(16).padStart(6, "0"),
      },
    ],
  };

  // write to json folder
  fs.writeFileSync(`./json/${colors[i]}.json`, JSON.stringify(json, null, 2));
}
