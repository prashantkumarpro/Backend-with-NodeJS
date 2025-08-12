const { exec } = require('child_process')

// Example: Open Chrome
exec('start chrome')

// Example: Open Notepad
exec('start notepad')

// Example: Open VS Code
exec('code .')

// Example: Open a specific file in Notepad
exec('notepad path/to/your/file.txt', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening file: ${error}`)
    return
  }
  console.log(`File opened successfully: ${stdout}`)
})

// Example: Open a URL in the default web browser
exec('start https://www.example.com', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening URL: ${error}`)
    return
  }
  console.log(`URL opened successfully: ${stdout}`)
})

// Example: Open a specific file in VS Code
exec('code path/to/your/file.txt', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening file in VS Code: ${error}`)
    return
  }
  console.log(`File opened in VS Code successfully: ${stdout}`)
})

// Example: Open a specific folder in VS Code

exec('code path/to/your/folder', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening folder in VS Code: ${error}`)
    return
  }
  console.log(`Folder opened in VS Code successfully: ${stdout}`)
})
