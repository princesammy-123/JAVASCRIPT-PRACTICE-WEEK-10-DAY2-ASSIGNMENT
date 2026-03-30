const studentsName = ["Queen", "Love", "Julieth", "Emmanuel", "Prince"];
let studentCount = 0;

for (let i = 0; i < studentsName.length; i++) {
  studentCount += 1;
  console.log(`Student ${studentCount}:`, studentsName[i]);
}
