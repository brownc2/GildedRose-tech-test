const {
  Shop,
  Item,
  Standard,
  AgedBrie,
  Backstage,
  Conjured,
} = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe("Will work out the sellIn and quality of an item after one day", () => {
    xit("Will correctly work out +5 Dexterity Vest after one day", () => {
      const gildedRose = new Shop([new Standard("+5 Dexterity Vest", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });
    xit("Will correctly work out Aged Brie after one day", () => {
      const gildedRose = new Shop([new AgedBrie("Aged Brie", 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    });
    xit("Will correctly work out Elixir of the Mongoose after one day", () => {
      const gildedRose = new Shop([
        new Standard("Elixir of the Mongoose", 5, 7),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(6);
    });
    xit("Will correctly work out Sulfuras, Hand of Ragnaros (1st test) after one day", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("+5 Dexterity Vest", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });
    xit("Will correctly work out Sulfuras, Hand of Ragnaros (2nd test) after one day", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });
    xit("Will correctly work out Backstage passes to a TAFKAL80ETC concert (1st test) after one day", () => {
      const gildedRose = new Shop([
        new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });

    xit("Will correctly work out Conjured Mana Cake after one day", () => {
      const gildedRose = new Shop([new Conjured("Conjured Mana Cake", 3, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(4);
    });
    it("Will correctly work out +5 Dexterity Vest after quality is less than 0", () => {
      const gildedRose = new Shop([new Standard("+5 Dexterity Vest", 0, 20)]);
      const items = gildedRose.updateQuality();
      console.log(items);
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(18);
    });
  });
});
