module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20) {
    return item;
  }

  item.enhancement++;
  return item;
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability -= 5;
    return item;
  }

  item.durability -= 10;
  if(item.enhancement > 16){
    item.enhancement--;
    return item;
  }
  return item;
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  return { ...item };
}
