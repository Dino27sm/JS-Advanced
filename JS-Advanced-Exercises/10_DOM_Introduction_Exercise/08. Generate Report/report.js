function generateReport() {
    let elemsObj = {
        checkboxes: document.querySelectorAll("input[type='checkbox']"),
        rows: document.getElementsByTagName("tr"),
        output: document.getElementById("output"),
    }
    let boxesChecked = Array.from(elemsObj.checkboxes)
        .map((x, i) => [x, i])
        .filter(x => x[0].checked)
        .map(x => [x[0].name, x[1]])

    let rowData = Array.from(elemsObj.rows)
        .slice(1)
        .map(x => Array.from(x.children).map(y => y.innerHTML))

    elemsObj.output.value = JSON.stringify(
        rowData.map(x =>
            boxesChecked.reduce((a, v) => {
                let [sColName, sColIndex] = v
                a[sColName] = x[sColIndex]
                return a
            }, {})
        )
    )
}