//data
const characters = [
  { name: 'Squidward', type: 'Squid', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Spongebob', type: 'Sponge', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Sandy', type: 'Squirrel', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Mr. Krabs', type: 'Crab', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Plankton', type: 'Plankton', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Mrs. Puff', type: 'Pufferfish', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Gary', type: 'Snail', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
  { name: 'Patrick', type: 'Starfish', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin orci dui, sit amet blandit magna rutrum et.' },
]

//compile handlebars
let source = document.getElementById("search-template").innerHTML;
let template = Handlebars.compile(source);
let html = template(characters);
document.getElementById("output").innerHTML = html;

//instantiate new TableFilter
const tableFilterObj = new TableFilter(
  'list-content',
  'content-container',
  'filter-input',
  'resultstring',
  'viewing',
);

//events
document.getElementById("filter-input").addEventListener("keyup", function () {
  tableFilterObj.filterTable("title");
});

document.getElementById("clear").addEventListener("click", function () {
  tableFilterObj.clearSearch('title');
});

