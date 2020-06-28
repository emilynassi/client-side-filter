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

