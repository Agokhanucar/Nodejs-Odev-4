const fs = require('fs');

// CREATE - Write data to employees.json
const employeeData = { name: "Employee 1 Name", salary: 2000 };

fs.writeFile('employees.json', JSON.stringify(employeeData), 'utf8', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('Employee data has been written to file');

    // READ - Read data from employees.json
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('File contents:', JSON.parse(data));

        // UPDATE - Update data in employees.json
        const updatedData = { name: "Updated Employee Name", salary: 3000 };
        fs.writeFile('employees.json', JSON.stringify(updatedData), 'utf8', (err) => {
            if (err) {
                console.log('Error updating file:', err);
                return;
            }
            console.log('File has been updated');

            // DELETE - Delete employees.json
            fs.unlink('employees.json', (err) => {
                if (err) {
                    console.log('Error deleting file:', err);
                    return;
                }
                console.log('File has been deleted');
            });
        });
    });
});
