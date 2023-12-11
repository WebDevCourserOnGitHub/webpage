const catalogueList = document.querySelector('.catalogue-list');
const catalogueItems = catalogueList.querySelectorAll('.catalogue-item');

catalogueItems.forEach(item => {
  const dataId = item.getAttribute('data-id');
  console.log(dataId);

  const itemId = item.querySelector('.catalogue-item-inner').id;
  const itemIdParts = itemId.split('_');
  console.log(itemIdParts);

  const title = item.querySelector('.catalogue-item-title').textContent;
  console.log(title);

  const href = item.querySelector('.catalogue-item-url span').getAttribute('data-href');
  console.log(href);

  const flags = item.querySelectorAll('.catalogue-item-info-flags img');
  flags.forEach(flag => {
    const src = flag.getAttribute('src');
    const last12Characters = src.slice(-12);
    console.log(last12Characters);
  });

  const categoryTitle = item.querySelector('.catalogue-item-info-category .catalogue-item-info-title').textContent;
  const categoryValue = item.querySelector('.catalogue-item-info-category .catalogue-item-info-value').textContent;
  console.log(`${categoryTitle}: ${categoryValue}`);

  const price = item.querySelector('.catalogue-item-price').textContent;
  console.log(price);

  const specialHintItems = item.querySelectorAll('.catalogue-item-special-hint-item');
  specialHintItems.forEach(hintItem => {
    const hintItemText = hintItem.textContent;
    console.log(hintItemText);
  });
});
