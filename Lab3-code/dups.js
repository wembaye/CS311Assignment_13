function removeDups(array) {
    const mySet = new Set(array);
    let uniques = [...mySet];
    return uniques;
}