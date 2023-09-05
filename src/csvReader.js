const csv = require("csv-parser");
const fs = require("fs");

class CsvReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    read(callback) {
        fs.createReadStream(this.filePath)
            .pipe(csv())
            .on("data", callback)
            .on("end", () => {
                console.log("CSV file successfully processed");
            });
    }
}

module.exports = CsvReader;
