// Select the parent div with class catalogue-list
const catalogueList = document.querySelector('.catalogue-list');
// Select all div elements with class catalogue-item
const catalogueItems = catalogueList.querySelectorAll('.catalogue-item');
// Insert a counter
let counter = 0;
// Iterate over each catalogue item
catalogueItems.forEach((item) => {
  // Increment the counter
  counter++; console.log(counter)

  // Check availability of data and replace null with "null-data"
  const itemId = item.getAttribute('data-id') || 'null-data';
  console.log(itemId ? itemId : 'data-id: no-data');
  // Extract the attribute "data-id" and output to console.log
  // console.log(itemId);

  // Extract the text value of the id attribute and split it into three parts
  // const idParts = itemId.split('_');
  // console.log(idParts);
      // const idParts = item.id.split('_') || 'null-data';
      // console.log(idParts.length === 3 ? idParts : 'id: no-data');
  
  // Extract text content of div with class "catalogue-item-title" and output to console.log
  const title = item.querySelector('.catalogue-item-title').textContent || 'null-data';
  console.log(title ? title : 'class: catalogue-item-title: no-data');

  // Extract text content of span tag with data-href attribute and output to console.log
  const dataHref = item.querySelector('span[data-href]').textContent || 'null-data';
  console.log(dataHref ? dataHref : 'data-href: no-data');

  // Extract the last 12 characters of the src attribute of both img tags with class "catalogue-item-info-flags"
  const flags = Array.from(item.querySelectorAll('.catalogue-item-info-flags img'))
    .map((img) => img.getAttribute('src').slice(-12) || 'null-data');
  console.log(flags);
  // Extract the last 12 characters of the src attribute of the img tags
      // const flags = item.querySelectorAll('.catalogue-item-info-flags img');
      // flags.forEach((flag) => {
        // const src = flag.getAttribute('src');
        // console.log(src ? src.slice(-12) : 'class: catalogue-item-info-flags: no-data');
      // });


  // Extract text content of div with class "catalogue-item-info-category" and output to console.log
  const categoryTitle = item.querySelector('.catalogue-item-info-category .catalogue-item-info-title');
  if (categoryTitle) {
    console.log(categoryTitle.textContent || 'null-data');
  }
  // Extract text content of div with class "catalogue-item-info-value" and all its descendants, if any
  const categoryValue = item.querySelector('.catalogue-item-info-category .catalogue-item-info-value');
  if (categoryValue) {
    console.log(categoryValue.textContent || 'null-data');
  }
  // Extract the text content of the catalogue-item-info-title and catalogue-item-info-value divs
  // const categoryTitle = item.querySelector('.catalogue-item-info-category .catalogue-item-info-title').textContent;
  // console.log(categoryTitle ? `${categoryTitle}: ${categoryValue}` : 'class: catalogue-item-info-category: no-data');
  // const categoryValue = item.querySelector('.catalogue-item-info-category .catalogue-item-info-value').textContent;
  // console.log(categoryTitle ? `${categoryTitle}: ${categoryValue}` : 'class: catalogue-item-info-category: no-data');


  // Extract text content of div with class "catalogue-item-price" and output to console.log
      const price = item.querySelector('.catalogue-item-price');
      if (price) {
        console.log(price.textContent || 'null-data');
      }
      // Extract the text content of the catalogue-item-price div
      // const price = item.querySelector('.catalogue-item-price');
      // console.log(price ? price.textContent : 'class: catalogue-item-price: no-data');
      
  // Extract text content of both div tags with class "catalogue-item-special-hint-item" and output to console.log
  const specialHints = Array.from(item.querySelectorAll('.catalogue-item-special-hint-item'))
  .map((hint) => hint.textContent);
  console.log(specialHints);
});
  // Extract the text content of the catalogue-item-special-hint-item divs
      // const specialHintItems = item.querySelectorAll('.catalogue-item-special-hint-item');
      // specialHintItems.forEach((hintItem) => {
        // console.log(hintItem.textContent ? hintItem.textContent : 'class: catalogue-item-special-hint-item: no-data');
      // });
    
// Save the result to a file with a name containing the current date and time in ISO format
const currentDate = new Date().toISOString();
const fileName = `${currentDate}_TODO-time_output.txt`;
// Code to save the result to a file is not provided as it depends on the environment and is beyond the scope of this code snippet.

// const currentDate = new Date().toISOString();
// const fileName = prompt('Please enter the file name to save the data:', `data_${currentDate}.txt`);

// Save the data to a file with a name containing the current date and time
// const currentDate = new Date().toISOString();
// const fileName = prompt('Please enter the file name to save the data:', `data_${currentDate}.txt`);
// Write the data to the file using your preferred method
// ...

// ~~~~~~~~~~~~

const catalogueList = document.querySelector('.catalogue-list');

const catalogueItems = Array.from(catalogueList.querySelectorAll('.catalogue-item'));

// Инициализация счетчика
let counter = 0;

// Функция сохранения данных в файл
const saveDataToFile = async () => {
  // Создание массива строк с данными из каталога
  const fileData = catalogueItems.map((item) => {
    // Инкрементирование счетчика
    counter++;
    // Получение значения атрибута 'data-id'
    const dataId = item.getAttribute('data-id');
    // Получение заголовка
    const title = item.querySelector('.catalogue-item-title').textContent;
    // Получение значения атрибута 'data-href'
    const dataHref = item.querySelector('span[data-href]').textContent;
    // Получение флагов
    const flags = Array.from(item.querySelectorAll('.catalogue-item-info-flags img')).map((img) => img.src.slice(-12));
    // Получение категории
    const categoryTitle = item.querySelector('.catalogue-item-info-category .catalogue-item-info-title').textContent;
    const categoryValue = item.querySelector('.catalogue-item-info-category .catalogue-item-info-value').textContent;
    // Получение цены
    const price = item.querySelector('.catalogue-item-price').textContent;
    // Получение специальных подсказок
    const specialHints = Array.from(item.querySelectorAll('.catalogue-item-special-hint-item')).map((hint) => hint.textContent);
    // Возврат строки с данными
    return `${counter}) ${dataId}: ${title} (${dataHref}) - ${flags.join(',')} - ${categoryTitle}: ${categoryValue} - ${price} - ${specialHints.join(',')}\n`;
  }).join('');

  // Генерация уникального имени файла
  const fileName = `data_${new Date().toISOString().replace(/:/g, '-')}.txt`;
  // Отображение диалога сохранения файла
  const fileHandle = await window.showSaveFilePicker(fileName);
  // Создание записываемого потока
  const writableStream = await fileHandle.createWritable();
  // Запись данных в файл
  await writableStream.write(fileData);
  // Закрытие потока
  await writableStream.close();
};

    // error 'saveDataToFile' is assigned a value but never used