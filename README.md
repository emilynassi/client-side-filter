# product-filter

Simple page filtering as you type.

--
## Demo
https://emilyrosenkranz.dev/client-side-filter/

## Installation

- Clone this repo to your local machine using `git@github.com:emilynassi/client-side-filter.git`

## Usage

Copy the ```filter.js``` into your project. Then, in your main js file, add the following code. 

```
const tableFilterObj = new TableFilter(
  'list-content', //main content wrapper
  'content-container', //individual content
  'filter-input', //user input
  'resultstring', //html element containing text typed in input
  'viewing', //container holding searched terms
);

```

Type and watch your results filter in real time!

 


