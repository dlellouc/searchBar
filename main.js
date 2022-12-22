
// function to append a search bar filtering the options on input change
function appendCustomizedSearchBar(appendToElement, optionsArray, optionsType) {
    
    // div container of the search bar and the options
    const searchBarContainer = document.createElement('div');
    searchBarContainer.className = 'searchBarContainer';

    // div container of the search bar and the search icon
    const searchBarWithIcon = document.createElement('div');
    searchBarWithIcon.className = 'searchBarWithIcon';

    // search bar
    const searchBarInputField = document.createElement('input');
    searchBarInputField.className = 'searchBarInputField';
    searchBarInputField.type = 'search';
    searchBarInputField.title = 'input change options filtering search bar';
    searchBarInputField.placeholder = 'Search ' + optionsType + '...';

    searchBarInputField.addEventListener('input', () => {
        // model - updating the filtered options array using the search value that has just changed
        let searchValue = searchBarInputField.value;
        let filteredOptionsArray = optionsArray.filter((element) => element.startsWith(searchValue));
        filteredOptionsArray.sort();

        // view - updating the options display
        optionsContainer.innerHTML = '';                            // clearing the options container
        if (filteredOptionsArray.length !== 0) {                    // if there are options to display
            displayOptions(filteredOptionsArray);
        } else {
            const noResultFoundDisplay = document.createElement('p');
            noResultFoundDisplay.className = 'noResultFoundDisplay';
            noResultFoundDisplay.innerText = 'No result found !';
            optionsContainer.append(noResultFoundDisplay);
        }
    });

    // search bar icon
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fa fa-search icon';

    // appending the search bar and the search icon to the same div
    searchBarWithIcon.append(searchIcon);
    searchBarWithIcon.append(searchBarInputField);

    // div container of the filtered options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'optionsDiv';

    // options display
    const displayOptions = (arr) => {
        optionsContainer.innerHTML = '';            // clearing the options container
        arr.forEach(function(element) {             // appending the options display to the options container
            const elementDisplay = document.createElement('p');
            elementDisplay.className = 'optionDisplay';
            elementDisplay.innerText = element;
            optionsContainer.append(elementDisplay);
        });
    };

    // appending to the appendToElement
    searchBarContainer.append(searchBarWithIcon);
    searchBarContainer.append(optionsContainer);
    appendToElement.append(searchBarContainer);

    // options first display
    let filteredOptionsArray = [...optionsArray];
    displayOptions(filteredOptionsArray.sort());
}


let fruitsArray = ['apple', 'apricot', 'banana', 'orange'];
appendCustomizedSearchBar(document.body, fruitsArray, 'fruits');

let vegetablesArray = ['cuncumber', 'pepper', 'oignon', 'tomato'];
appendCustomizedSearchBar(document.body, vegetablesArray, 'vegetables');
