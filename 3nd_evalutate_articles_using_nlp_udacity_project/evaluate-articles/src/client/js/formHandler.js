async function handleSubmit(event) {
    event.preventDefault()

       // select the entered content
       let entryUrl = document.getElementById('name').value;

       // result variables
       const agreement = document.getElementById("agreement");
    const score_tag = document.getElementById("score_tag");
    const confidence = document.getElementById("confidence");
    const irony = document.getElementById("irony");
    const subjectivity = document.getElementById("subjectivity");
    const sentence_list = document.getElementById("sentence-list");
    const model = document.getElementById("model");

    // clear previous entries from last submit
    agreement.innerHTML = '';
    score_tag.innerHTML = '';
    confidence.innerHTML = '';
    irony.innerHTML = '';
    subjectivity.innerHTML = '';
    sentence_list.innerHTML = '';
    model.innerHTML = '';

    /*api call*/
    if (Client.validateUrl(entryUrl)) {
    await fetch("http://localhost:8092/analyse", {
        method: "POST",
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ entryUrl: entryUrl }),
    })
} else {
    // output error message
    console.log('the url is invalid');
};


    //Fetch data
    const results = await fetch("http://localhost:8092/meaningCloud");
    const resultsJson = await results.json();

    console.log(`returning ${results}`);
    console.log(resultsJson);

    Client.changeUI(resultsJson);
}

export {
    handleSubmit
}