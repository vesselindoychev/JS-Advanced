function generateReport() {
    let tableHeader = document.querySelectorAll('thead tr th');
    let tableRow = document.querySelectorAll('tbody tr');
    let result = [];

    for (let i = 0; i < tableRow.length; i++) {
        let tabledData = tableRow[i].cells;
        let tempData = {};

        for (let z = 0; z < tabledData.length; z++) {
            let infoTHeader = tableHeader[z].childNodes;
            if (infoTHeader[1].checked === true) {
                tempData[infoTHeader[0].textContent.trim().toLowerCase()] = tabledData[z].textContent
            }
        }
        result.push(tempData)
    } 

    let jsonResult = JSON.stringify(result);
    document.getElementById('output').textContent = jsonResult

}