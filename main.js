
// search bar filtering the options on input change

// arrays of the options
let optionsArray = ['apple', 'apricot', 'banana', 'orange'];
let filteredOptionsArray = optionsArray;
let optionsType = 'fruits';

// no result found message
let noResultFoundMsg = 'No result found !';

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

searchBarInputField.addEventListener('input', function() {
    // model - updating the filtered options array using the search value that has just changed
    let searchValue = searchBarInputField.value;
    filteredOptionsArray = optionsArray.filter(function(element) {
        return element.startsWith(searchValue);
    });
    filteredOptionsArray.sort();

    // view - updating the options display
    optionsContainer.innerHTML = '';                            // clearing the options container
    if (filteredOptionsArray.length !== 0) {                    // if there are options to display
        filteredOptionsArray.forEach(function(element) {        // appending the options display to the options container
            const elementDisplay = document.createElement('p');
            elementDisplay.className = 'optionDisplay';
            elementDisplay.innerText = element;
            optionsContainer.append(elementDisplay);
        });
    } else {
        const noResultFoundDisplay = document.createElement('p');
        noResultFoundDisplay.className = 'noResultFoundDisplay';
        noResultFoundDisplay.innerText = noResultFoundMsg;
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

// appending to the body
searchBarContainer.append(searchBarWithIcon);
searchBarContainer.append(optionsContainer);
document.body.append(searchBarContainer);

// options first display
filteredOptionsArray.sort().forEach(function(element) {
    const elementDisplay = document.createElement('p');
    elementDisplay.className = 'optionDisplay';
    elementDisplay.innerText = element;
    optionsContainer.append(elementDisplay);
});

