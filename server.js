const express = require("express");
const multer = require("multer");
const fs = require("fs");
const XLSX = require("xlsx");
const cors = require("cors");

const app = express();
const upload = multer();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle form submission for bank data
app.post("/submit-bank", upload.none(), (req, res) => {
    const formData = req.body;
    const excelFilePath = "Bankdata.xlsx";
    const jsonFilePath = "Bankdata.json";

    let workbook;
    let worksheet;
    let jsonData = [];

    // Read Excel file if it exists
    if (fs.existsSync(excelFilePath)) {
        workbook = XLSX.readFile(excelFilePath);
        worksheet = workbook.Sheets["Sheet1"];
        jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    } else {
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.aoa_to_sheet([["full_name", "email", "phone", "address", "bank_account", "cvv"]]);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        jsonData.push(["full_name", "email", "phone", "address", "bank_account", "cvv"]);
    }

    // Add the new form data to both Excel and JSON
    jsonData.push([formData.name, formData.email, formData.phone, formData.address, formData.bank_account, formData.cvv]);

    // Write the new data back to Excel
    const newWorksheet = XLSX.utils.aoa_to_sheet(jsonData);
    workbook.Sheets["Sheet1"] = newWorksheet;
    XLSX.writeFile(workbook, excelFilePath);

    // Write the new data to JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

    res.json({ message: "Data saved successfully!" });
});

// Handle form submission for user data
app.post("/submit-user", upload.none(), (req, res) => {
    const formData = req.body;
    const excelFilePath = "Userdata.xlsx";
    const jsonFilePath = "Userdata.json";

    let workbook;
    let worksheet;
    let jsonData = [];

    try {
        // Read Excel file if it exists
        if (fs.existsSync(excelFilePath)) {
            workbook = XLSX.readFile(excelFilePath);
            worksheet = workbook.Sheets["Sheet1"];
            jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        } else {
            workbook = XLSX.utils.book_new();
            worksheet = XLSX.utils.aoa_to_sheet([["full_name", "email", "empId"]]);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
            jsonData.push(["full_name", "email", "empId"]);
        }

        // Add the new form data to both Excel and JSON
        jsonData.push([formData.name, formData.email, formData.empId]);

        // Write the new data back to Excel
        const newWorksheet = XLSX.utils.aoa_to_sheet(jsonData);
        workbook.Sheets["Sheet1"] = newWorksheet;
        XLSX.writeFile(workbook, excelFilePath);

        // Write the new data to JSON file
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

        res.json({ message: "Data saved successfully!" });
    } catch (error) {
        console.error("Error writing to Excel or JSON:", error);
        res.status(500).json({ message: "Error saving data!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
