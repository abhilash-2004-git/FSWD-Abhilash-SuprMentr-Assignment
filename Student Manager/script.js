const students = [];

function addStudent(name, marks) {
    const student = {
        name: name,
        marks: marks
    };
    students.push(student);
}

function calculateAverage(student) {
    if (student.marks.length === 0) return 0;
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    return total / student.marks.length;
}

function displayStudents() {
    let output = "";
    students.forEach(student => {
        const avg = calculateAverage(student).toFixed(2);
        output += `
            <div class="student-card">
                <div class="student-name">${student.name}</div>
                <div>Marks: [${student.marks.join(', ')}]</div>
                <div class="student-avg">Average: ${avg}</div>
            </div>
        `;
    });
    document.getElementById("output").innerHTML = output;
}

addStudent("Alice", [85, 90, 88]);
addStudent("Bob", [70, 75, 80]);
addStudent("Charlie", [95, 92, 98]);
displayStudents();