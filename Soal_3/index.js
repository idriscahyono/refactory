const fs = require("fs");

const itemsMeetingRoom = [];
const itemsElectronic = [];
const itemsFurnitures = [];
const itemsBrown = [];
const itemsPurchased = [];

fs.readFile("inventory_list.json", (err, data) => {
  if (err) throw err;
  let inventoryList = JSON.parse(data);

  //1. Find items in Meeting Room.
  for (place in inventoryList) {
    if (inventoryList[place].placement.name == "Meeting Room") {
      itemsMeetingRoom.push(inventoryList[place].name);
    }
  }

  //2. Find all electronic devices.
  for (electronic in inventoryList) {
    if (inventoryList[electronic].type == "electronic") {
      itemsElectronic.push(inventoryList[electronic].name);
    }
  }

  //3. Find all furnitures.
  for (furnitures in inventoryList) {
    if (inventoryList[furnitures].type == "furniture") {
      itemsFurnitures.push(inventoryList[furnitures].name);
    }
  }

  //4. Find all items was purchased at 16 Januari 2020.
  for (purchased in inventoryList) {
    if (
      new Date(inventoryList[purchased].purchased_at).toLocaleDateString("id", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) ==
      new Date(2020, 0, 16).toLocaleDateString("id", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    ) {
      itemsPurchased.push(inventoryList[purchased].name);
    }
  }

  //5. Find all items with brown color.
  for (color in inventoryList) {
    if (inventoryList[color].tags.includes("brown")) {
      itemsBrown.push(inventoryList[color].name);
    }
  }

  console.log("1. Find items in Meeting Room", itemsMeetingRoom);
  console.log("2. Find all electronic devices", itemsElectronic);
  console.log("3. Find all furnitures.", itemsFurnitures);
  console.log(
    "4. Find all items was purchased at 16 Januari 2020",
    itemsPurchased
  );
  console.log("5. Find all items with brown color", itemsBrown);
});
