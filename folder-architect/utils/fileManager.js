const fs = require("fs").promises;
const path = require("path");

// Read file
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("📖 File Content:\n", data);
  } catch (err) {
    console.error("❌ Error reading file:", err.message);
  }
}

// Copy file (with delay fix)
async function copyFile(src, dest) {
  try {
    await fs.copyFile(src, dest);
    console.log("✅ File copied successfully!");
  } catch (err) {
    console.error("❌ Copy failed:", err.message);
  }
}

// Move file (cut)
async function moveFile(src, dest) {
  try {
    await fs.rename(src, dest);
    console.log("🚚 File moved successfully!");
  } catch (err) {
    console.error("❌ Move failed:", err.message);
  }
}

// List files
async function listFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    console.log("📂 Files in folder:");
    files.forEach(file => console.log(" -", file));
  } catch (err) {
    console.error("❌ Error listing files:", err.message);
  }
}

module.exports = { readFile, copyFile, moveFile, listFiles };