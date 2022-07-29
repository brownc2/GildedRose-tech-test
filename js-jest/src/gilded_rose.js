class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateItem() {}
}

class Standard extends Item {
  updateItem() {
    this.sellIn -= 1;
    this.quality -= 1;
    if (this.sellIn <= 0) {
      this.quality -= 1;
    }
    if (this.quality <= 0) {
      this.quality = 0;
    }
    if (this.quality >= 50) {
      this.quality = 50;
    }
  }
}

class AgedBrie extends Item {
  updateItem() {
    (this.sellIn -= 1), (this.quality += 1);
    if (this.quality >= 50) {
      this.quality = 50;
    }
  }
}

class Backstage extends Item {
  updateItem() {
    (this.sellIn -= 1), (this.quality += 1);
    if (this.sellIn <= 10) {
      this.quality += 1;
    }
    if (this.sellIn <= 5) {
      this.quality += 1;
    }
    if (this.quality >= 50) {
      this.quality = 50;
    }
  }
}
class Conjured extends Item {
  updateItem() {
    (this.sellIn -= 1), (this.quality -= 2);
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      item.updateItem();
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  Standard,
  AgedBrie,
  Backstage,
  Conjured,
};
