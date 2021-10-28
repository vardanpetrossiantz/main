function validateUrl(inputText) {
    let urlregex = /^https?:\/\/[^ "]*$/;
    return urlregex.test(inputText);
}

export { validateUrl }
