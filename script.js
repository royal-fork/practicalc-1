// scripts.js
function copyCode() {
    // Get the code block element
    const codeBlock = document.getElementById('code-block');

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = codeBlock.textContent;
    document.body.appendChild(textarea);

    // Select and copy the code
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally, show a message or update the button text
    alert('Code copied to clipboard!');
}
