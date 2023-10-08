const funct1 = () => {
    const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1kiWHYqoTNvOoCHmPTjlbBRN7PkqqECmP9UVPB4rWfF8/edit#gid=0");
    const sheet = sheets.getSheetByName("Page1");

    function doPost(e) {

        // Extract the method name from the request data
        const method = e.parameter.method;

        if (method === "getData") {
            // Get the selection from the query
            const groupID = e.parameter.groupID;

            // Recover the data without headers
            const data = sheet.getDataRange().getValues().slice(1);

            // Filter the data by its ID group
            const selectedData = data.filter(row => row[5] === groupID);

            // Convert the selected data into a string with newline separators
            const responseText = selectedData.map(row => row.join('\t')).join('\n');

            // Set the response content type to plain text
            const output = ContentService.createTextOutput(responseText).setMimeType(ContentService.MimeType.PLAIN_TEXT);

            return output;
        } else if (method === "addData") {
            // Extract the data fields from the request body
            const name = e.parameter.Name;
            const description = e.parameter.Description;
            const follow = e.parameter.follow;

            // Create an array with the data you want to add to the new row
            const newRowData = [name, description, follow];

            // Append the new row to the sheet
            sheet.appendRow(newRowData);

            // Return a JSON response indicating success
            return ContentService.createTextOutput(JSON.stringify({ status: "success3", data: "Data added to the sheet" })).setMimeType(ContentService.MimeType.JSON);
        } else {
            // Invalid method specified
            return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Invalid method" })).setMimeType(ContentService.MimeType.JSON);
        }
    }
}