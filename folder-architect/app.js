const path = require("path");
const { readFile, copyFile, moveFile, listFiles } = require("./utils/fileManager");

async function runApp() {
  const file1 = path.join(__dirname, "data", "file1.txt");
  const file2 = path.join(__dirname, "data", "file2.txt");
  const copyPath = path.join(__dirname, "data", "copy.txt");
  const movedPath = path.join(__dirname, "data", "moved.txt");

  console.log("\n--- Folder Architect Running ---\n");

  // Step 1: Read file
  await readFile(file1);

  // Step 2: Copy file
  await copyFile(file1, copyPath);

  // Step 3: Move file
  await moveFile(file2, movedPath);

  // Step 4: List files
  await listFiles(path.join(__dirname, "data"));
}

runApp();