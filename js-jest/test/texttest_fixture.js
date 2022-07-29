const {
  Shop,
  Item,
  Standard,
  AgedBrie,
  Sulfuras,
  Backstage,
  Conjured,
} = require("../src/gilded_rose");

const items = [
  new Standard("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new Standard("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, 40),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 5, 40),

  // This Conjured item does not work properly yet
  new Conjured("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[5]) || 5;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach((item) =>
    console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
  );
  gildedRose.updateQuality();
}
