

   // select the entered content
   let userEntry = document.getElementById('name').value;



// result variables
const ironyCategory = document.getElementById('irony');

async function handleSubmit(event) {
    event.preventDefault();

    // clear results from previous submit
    ironyCategory.innerHTML = '';

 
    // validate user entry
    if (Client.checkForUrl(userEntry)) {
        await fetch('http://localhost:8082/meaningCloud', {
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
    const req = await fetch('/meaningCloud');
    try {
        const res = await req.json();

    // insert the results extracted from API
    ironyCategory.innerHTML = 'Irony: ' + res.irony;
    } catch (error) {
        console.log('UI error')
    }
}

export { handleSubmit }