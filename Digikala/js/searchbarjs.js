const basicAutocomplete = document.querySelector('#search-autocomplete');
const data = ['One', 'Two', 'Three', 'Four', 'Five'];
const dataFilter = (value) => {
    return data.filter((item) => {
        return item.toLowerCase().startsWith(value.toLowerCase());
    });
};

new mdb.Autocomplete(basicAutocomplete, {
    filter: dataFilter
});

// ===========================================================================================

let mybutton = document.getElementById("btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}