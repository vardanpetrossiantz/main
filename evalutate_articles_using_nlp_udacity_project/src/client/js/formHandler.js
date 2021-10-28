const fetch = require('node-fetch');

// result variables
const ironyCategory = document.getElementById('irony');

async function handleSubmit(event) {
    event.preventDefault();

    // clear results from previous submit
    ironyCategory.innerHTML = '';

    // select the entered content
    let userEntry = document.getElementById('name').value;

    // validate user entry
    if (Client.checkForUrl(userEntry)) {
        await fetch('/article', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: userText,
        })
            .then(res => res.json())
            .then(res => {
                updateUI(res);
                console.log('res ui: ', res);
            })

    } else {
        // output error message
        console.log('not valid url');
    }
}

/* Update UI */
const updateUI = (res) => {

    // insert the results extracted from API
    ironyCategory.innerHTML = `Irony: ${capitalizeFirstLetter(res.irony)}`;
}

/* Function to capitalize first letter of string */
function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { handleSubmit }