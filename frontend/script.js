const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5017";

outputJson = document.getElementById('outputJson')
outputCsv = document.getElementById('outputCsv')
outputPdf = document.getElementById('outputPdf')
outputPptx = document.getElementById('outputPptx')


document.getElementById('getAllDataButton').addEventListener('click', function() {
    fetch(`${BASE_URL}/api/data`)
    .then(response => response.json())
    .then(data => {
        clearOutput();
        displayAllTable(data)
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error: ' + error
    })
})

document.getElementById('getJsonDataButton').addEventListener('click', function() {
    fetch(`${BASE_URL}/api/data/json`)
    .then(response => response.json())
    .then(data => {
        clearOutput();
        displayJsonTable(data, outputJson);
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error: ' + error
    })
})

document.getElementById('getCsvDataButton').addEventListener('click', function() {
    fetch(`${BASE_URL}/api/data/csv`)
    .then(response => response.json())
    .then(data => {
        clearOutput();
        displayCsvTable(data, outputCsv)
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error: ' + error
    })
})

document.getElementById('getPdfDataButton').addEventListener('click', function() {
    fetch(`${BASE_URL}/api/data/pdf`)
    .then(response => response.json())
    .then(data => {
        clearOutput();
        displayPdfTable(data, outputPdf)
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error: ' + error
    })
})

document.getElementById('getPptxDataButton').addEventListener('click', function() {
    fetch(`${BASE_URL}/api/data/pptx`)
    .then(response => response.json())
    .then(data => {
        clearOutput();
        displayPptxTable(data, outputPptx)
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error: ' + error
    })
})

function clearOutput() {
    document.getElementById('outputJson').innerHTML = '';
    document.getElementById('outputCsv').innerHTML = '';
    document.getElementById('outputPdf').innerHTML = '';
    document.getElementById('outputPptx').innerHTML = '';
}

function displayAllTable(data) {

    displayJsonTable(data[0], outputJson);
    displayCsvTable(data[1], outputCsv);
    displayPdfTable(data[2], outputPdf);
    displayPptxTable(data[3], outputPptx);
    dataTypeHeader.innerText = "All Data"
}

function displayJsonTable(data, output) {
    dataTypeHeader = document.getElementById('data-type')
    dataTypeHeader.innerText = "JSON Data"

    let headers = ["Employee ID", "Name", "Role", "Cashmoney", "Hired Date"];
    let table = tableCreation(headers);

    let tbody = document.createElement("tbody");
    data.forEach(companyData => {
        let companyRow = document.createElement("tr");
        let companyCell = document.createElement("td");
        companyCell.colSpan = headers.length;
        companyCell.style.border = "2px solid #000";
        companyCell.style.padding = "20px";
        companyCell.style.fontWeight = "bold";
        companyCell.style.backgroundColor = "#d9e2ff";
        companyCell.style.textAlign = "center";
        companyCell.textContent = companyData.companies.name;
        companyRow.appendChild(companyCell);
        tbody.appendChild(companyRow);

        const employees = companyData.companies.employees;
        employees.forEach(employee => {
            let row = document.createElement("tr");

            rowCreation(row, 5, [
                employee.id || "N/A", 
                employee.name || "N/A", 
                employee.role || "N/A", 
                employee.cashmoneh || "N/A", 
                employee.hired_date || "N/A"
            ]);
    
            tbody.appendChild(row);
        });
    });

    table.appendChild(tbody);
    output.innerHTML = '';
    output.appendChild(table);



    let headers2 = ["Name", "Industry", "Revenue", "Location"];
    let table2 = tableCreation(headers2);

    let tbody2 = document.createElement("tbody");
    data.forEach(companyData => {
        let row = document.createElement("tr");

        rowCreation(row, 4, [
            companyData.companies.name || "N/A", 
            companyData.companies.industry || "N/A", 
            companyData.companies.revenue || "N/A", 
            companyData.companies.location || "N/A", 
        ]);

        tbody2.appendChild(row);
    });

    table2.appendChild(tbody2);
    output.appendChild(table2);
    
}


function displayCsvTable(data, output) {
    dataTypeHeader = document.getElementById('data-type')
    dataTypeHeader.innerText = "CSV Data"

    let headers = ["Date", "Membership ID", "Membership Type", "Activity", "Revenue", "Duration (Mins)", "Location"];
    let table = tableCreation(headers)

    let tbody = document.createElement("tbody");
    data.forEach(entry => {
        let row = document.createElement("tr");

        rowCreation(row, 7, [
            entry.Date || "N/A",
            entry.Membership_ID || "N/A",
            entry.Membership_Type || "N/A",
            entry.Activity || "N/A",
            entry.Revenue || "N/A",
            entry["Duration (Minutes)"] || "N/A",
            entry.Location || "N/A"
        ]);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    output.innerHTML = '';
    output.appendChild(table);
    
}

function displayPdfTable(data, output) {
    dataTypeHeader = document.getElementById('data-type')
    dataTypeHeader.innerText = "PDF Data"

    let headers = ["Year", "Quarter", "Revenue (in $)", "Memberships Sold", "Ave Duration (Mins)"];
    let table = tableCreation(headers);

    let tbody = document.createElement("tbody");
    data.forEach(entry => {
        let row = document.createElement("tr");

        rowCreation(row, 5, [
            entry.Year || "N/A", 
            entry.Quarter || "N/A", 
            entry['Revenue (in $)'] || "N/A", 
            entry['Memberships Sold'] || "N/A", 
            entry['Ave Duration (Minutes)'] || "N/A"
        ]);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    output.innerHTML = '';
    output.appendChild(table);
    
}

function displayPptxTable(data, output) {
    dataTypeHeader = document.getElementById('data-type')
    dataTypeHeader.innerText = "PPTX Data"

    // table2 and headers2 is for first and third slide
    let headers = ["Total Revenue", "Total Membership Sold", "Top Location"];
    let headers2 = ["Quarter", "Revenue (in $)", "Memberships Sold", "Avg Duration (Minutes): 90"];
    let table = tableCreation(headers);
    let table2 = tableCreation(headers2);

    let tbody = document.createElement("tbody");
    let tbody2 = document.createElement("tbody");
    let canvas = document.createElement("canvas");
    canvas.id = "recenuePieChart";
    data.forEach(slide => {
        let row = document.createElement("tr");
        
        if (slide.title == 'FitPro: Annual Summary 2023') {
            rowCreation(row, 3, [
                slide['Key Highlights']['Total Revenue'] || "N/A",
                slide['Key Highlights']['Total Memberships Sold'] || "N/A",
                slide['Key Highlights']['Top Location'] || "N/A"
            ]);
            tbody.appendChild(row);
        }
        
        if (slide.title == 'Quarterly Metrics') {
            slide.table['Table Data'].forEach(entry => {
                let row2 = document.createElement("tr");
                rowCreation(row2, 4, [
                    entry['Quarter'] || "N/A", 
                    entry['Revenue (in $)'] || "N/A", 
                    entry['Memberships Sold'] || "N/A", 
                    entry['Avg Duration (Minutes)'] || "N/A"
                ]);
                tbody2.appendChild(row2);
            })
        }

        if (slide.title == "Revenue Breakdown by Activity") {
            let labels = [];
            let values = [];

            for (let [activity, percentage] of Object.entries(slide['Revenue Distribution'])) {
                if (activity !== "Revenue Distribution") {
                    labels.push(activity);
                    values.push(parseFloat(percentage.replace('%', '')));
                }
            }

            new Chart(canvas, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: values,
                        background: ["FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
                        hoverOffset: 5
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    }
                }
            })
        }
    });


        
    table.appendChild(tbody);
    output.appendChild(table);
    table2.appendChild(tbody2);
    output.appendChild(table2);
    output.appendChild(canvas);
    
}



// Helper Functions
function rowCreation(row, iteration, data) {
    for(let i = 0; i < iteration; i++) {
        let cell = document.createElement("td");
        cell.style.border = "1px solid #ddd"
        cell.style.padding = "8px";
        cell.textContent = data[i];
        row.appendChild(cell);
    }
}

function tableCreation(headers) {
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    
    headers.forEach(header => {
        let th = document.createElement("th");
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.backgroundColor = "#f4f4f4";
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    return table;
}