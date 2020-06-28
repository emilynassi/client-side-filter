//data
const characters = [
  {name : 'Squidward'},
  {name : 'Spongebob'},
  {name : 'Sandy'},
  {name : 'Mr. Krabs'},
  {name : 'Plankton'},
  {name : 'Mrs. Puff'},
  {name : 'Gary'},
  {name : 'Patrick'},
]

//compile handlebars
let source = document.getElementById("search-template").innerHTML;
let template = Handlebars.compile(source);
let html = template(characters);
document.getElementById("output").innerHTML= html;


const tableFilterObj = new TableFilter(
  'list-content',
  'content-container',
  'filter-input',
  'resultstring',
  'viewing',
);

  document.getElementById("filter-input").addEventListener("keyup", function(){
    tableFilterObj.filterTable("title");
  });

  document.getElementById("clear").addEventListener("keyup", function(){
    tableFilterObj.tableFilterObj.clearSearch('title');
  });

