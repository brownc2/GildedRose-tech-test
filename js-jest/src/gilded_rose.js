class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
    this.outcome = [];
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.standardItem(this.items))
        if (this.specialBrie(this.items))
          if (this.specialSulfuras(this.items))
            if (this.specialConcert(this.items))
              if (this.conjured(this.items)) {
                return this.outcome;
              }
    }
    return this.outcome;
  }

  standardItem(items) {
    let standard = items;
    for (let i = 0; i < this.items.length; i++) {
      if (standard[i].name != "Aged Brie")
        if (standard[i].name != "Sulfuras, Hand of Ragnaros")
          if (standard[i].name != "Backstage passes to a TAFKAL80ETC concert")
            if (standard[i].name != "Conjured Mana Cake") {
              standard[i].quality = standard[i].quality - 1;
              standard[i].sellIn = standard[i].sellIn - 1;
              this.outcome.push(standard[i]);
            }
      return this.outcome;
    }
  }

  specialBrie(items) {
    let brie = items;
    for (let i = 0; i < this.items.length; i++) {
      if (brie[i].name == "Aged Brie") {
        brie[i].quality = brie[i].quality + 1;
        brie[i].sellIn = brie[i].sellIn - 1;
        this.outcome.push(brie[i]);
      }
    }
    return this.outcome;
  }
  specialSulfuras(items) {
    let sulfuras = items;
    for (let i = 0; i < this.items.length; i++) {
      if (sulfuras[i].name == "Sulfuras, Hand of Ragnaros") {
        this.outcome.push(sulfuras[i]);
      }
    }
    return this.outcome;
  }
  specialConcert(items) {
    let concert = items;
    for (let i = 0; i < this.items.length; i++) {
      if (concert[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        concert[i].quality = concert[i].quality + 1;
        concert[i].sellIn = concert[i].sellIn - 1;
        this.outcome.push(concert[i]);
      }
    }
    return this.outcome;
  }
  conjured(items) {
    let concert = items;

    for (let i = 0; i < this.items.length; i++) {
      if (concert[i].name == "Conjured Mana Cake") {
        concert[i].quality = concert[i].quality - 2;
        concert[i].sellIn = concert[i].sellIn - 1;
        this.outcome.push(concert[i]);
      }
    }

    return this.outcome;
  }
}

// const gildedRose = new Shop([
//   new Item("Conjured Mana Cake", 3, 6),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
// ]);
// console.log(gildedRose.updateQuality());

module.exports = {
  Item,
  Shop,
};
