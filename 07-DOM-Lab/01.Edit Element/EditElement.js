function editElement(ref, match, replacer) {
    let text = ref.innerText;
    // let matcher = new RegExp(match, 'g');
    // let edited = text.replace(matcher, replacer);
    text = text.replaceAll(match, replacer);
    ref.textContent = text;

}

