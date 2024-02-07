// ExcelHelper.js

const ExcelJS = require('exceljs');

async function getRowValues(sheetName, rowIndex, filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);

  // Get column names from the first row
  const columnNames = worksheet.getRow(1).values;

  // Get values of all cells in the specified row
  const row = worksheet.getRow(rowIndex).values;

  // Combine column names with row values into an object
  const rowData = {};
  columnNames.forEach((columnName, index) => {
    rowData[columnName] = row[index];
  });

  return rowData;
}

module.exports = getRowValues;
