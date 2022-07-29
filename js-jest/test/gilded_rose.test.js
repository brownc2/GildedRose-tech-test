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
    it("Will correctly work out +5 Dexterity Vest after one day", () => {
      const gildedRose = new Shop([new Standard("+5 Dexterity Vest", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });
    it("Will correctly work out Aged Brie after one day", () => {
      const gildedRose = new Shop([new AgedBrie("Aged Brie", 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    });
    it("Will correctly work out Elixir of the Mongoose after one day", () => {
      const gildedRose = new Shop([
        new Standard("Elixir of the Mongoose", 5, 7),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(6);
    });
    it("Will correctly work out Sulfuras, Hand of Ragnaros (1st test) after one day", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("+5 Dexterity Vest", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });
    it("Will correctly work out Sulfuras, Hand of Ragnaros (2nd test) after one day", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });
    it("Will correctly work out Backstage passes to a TAFKAL80ETC concert (1st test) after one day", () => {
      const gildedRose = new Shop([
        new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });

    it("Will correctly work out Conjured Mana Cake after one day", () => {
      const gildedRose = new Shop([new Conjured("Conjured Mana Cake", 3, 6)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(4);
    });
    it("Will correctly work out +5 Dexterity Vest after quality is less than 0", () => {
      const gildedRose = new Shop([new Standard("+5 Dexterity Vest", 0, 20)]);
      const items = gildedRose.updateQuality();
      console.log(items);
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(18);
    });
    it("will no show a negative number for +5 Dexterity Vest if quality hits 0 ", () => {
      const gildedRose = new Shop([new Standard("+5 Dexterity Vest", 0, 0)]);
      const items = gildedRose.updateQuality();
      console.log(items);
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
    it("Will correctly work out Aged Brie if quality hits 50", () => {
      const gildedRose = new Shop([new AgedBrie("Aged Brie", 20, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(19);
      expect(items[0].quality).toBe(50);
    });
    it("Will correctly work out +5 Dexterity Vest if quality hits 50", () => {
      const gildedRose = new Shop([new Standard("+5 Dexterity Vest", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
    it("Will correctly work out Backstage passes to a TAFKAL80ETC concert if sellin is less than 10", () => {
      const gildedRose = new Shop([
        new Backstage("Backstage passes to a TAFKAL80ETC concert", 9, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(8);
      expect(items[0].quality).toBe(22);
    });
    it("Will correctly work out Backstage passes to a TAFKAL80ETC concert if sellin is less than 5", () => {
      const gildedRose = new Shop([
        new Backstage("Backstage passes to a TAFKAL80ETC concert", 4, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(3);
      expect(items[0].quality).toBe(23);
    });
    it("Will correctly work out Backstage passes to a TAFKAL80ETC concert if quality is 50", () => {
      const gildedRose = new Shop([
        new Backstage("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(3);
      expect(items[0].quality).toBe(50);
    });
  });
});
