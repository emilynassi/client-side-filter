class TableFilter {
    constructor(element, prodContainers, input, searchString, stringContainer){
        this.productListContent = document.getElementById(element);
        //use for specificity within section you want to filter on in case class names exist elsewhere on page
        this.productContainer = this.productListContent.getElementsByClassName(prodContainers);
        this.userInput = document.getElementById(input);
        this.resultsString = document.getElementById(searchString);
        this.strContainer = document.getElementById(stringContainer);
    }
    //show search string with easy way to clear out current search
    showStringSearched(){

        this.resultsString.innerHTML = this.userInput.value;
        //Check if the search string is empty hide result statement if true
        (this.userInput.value === '' || this.userInput.value === null) ? this.strContainer.style.display = 'none' : this.strContainer.style.display = '';
    };
    filterTable(value) {
        this.showStringSearched();
        let _value = value;

        [...this.productContainer].forEach(product => {
            let found = false;
            //loop through every name class to match input
            [...product.getElementsByClassName(_value)].forEach(elem => {
                if (elem.innerHTML.toUpperCase().indexOf(this.userInput.value.toUpperCase()) > -1) {
                    found = true;
                }
            });
            this.displayItems(found, product);
        })

    };
    displayItems(found, product){
        if (found) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    };
    clearSearch(value) {
        console.log(value)
        this.userInput.value = '';
        this.filterTable(value);
        this.resultsString.innerHTML = '';
        this.strContainer.style.display = 'none';
    };
}
