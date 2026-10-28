window.addEventListener('keydown', (event) => {
    // Check for Ctrl + A (or Cmd + A on Mac)
    const isSelectAll = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a';

    if (isSelectAll) {
        // 1. Prevent the outer window/page from selecting surrounding UI elements
        event.preventDefault();

        // 2. Focus the editable editor paper
        document.getElementById('editor-paper').focus();

        // 3. Reliably select all internal paragraphs (<p>) inside the editor
        document.execCommand('selectAll', false, null);
    }
});