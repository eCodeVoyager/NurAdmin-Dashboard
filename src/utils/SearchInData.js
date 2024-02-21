// searchUtils.js
export function filterDataBySearch(data, searchQuery) {
    return data.filter(item =>
        Object.values(item).some(value =>
            value.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
}

export function paginateData(data, currentPage, entriesPerPage) {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    return data.slice(startIndex, endIndex);
}
