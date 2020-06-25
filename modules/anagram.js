exports.anagram = (word, words) => {
    let finalList = [];
    let temp = word.split('').sort().join();
    words.forEach(el => {
        let tempEl = el.split('').sort().join();
        if(temp===tempEl) finalList.push(el);
    });
    return finalList
}