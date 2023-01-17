function mostViewSort(data) {
    let initial = 0;
    let secondFirst = Math.floor(data.length / 2) - 1;
    let results = [];
    data.forEach((item, i) => {
        if (i % 2) {
            secondFirst += 1;
            results.push({...data[secondFirst], id: secondFirst + 1});
        } else {
            initial += 1;
            results.push({...data[initial], id: initial});
        }
    });
    return results;
}

export {
    mostViewSort
};