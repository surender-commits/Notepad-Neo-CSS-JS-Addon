
# Notepad Neo CSS & JS Addon

A lightweight Chrome extension that applies custom CSS and JavaScript enhancements to [Notepad Neo](https://notepadneo.com/notepad/).

The extension modifies the editor's appearance, adjusts selected interface elements, improves scrollbar styling, and provides custom handling for the `Ctrl+A` / `Cmd+A` keyboard shortcut.

## Features

- **Custom Editor Padding:** Adjusts the editor container's padding for a cleaner layout.
- **Dark-Mode Styling:** Customizes the editor paper's appearance when dark mode is active.
- **Custom Scrollbars:** Applies styled scrollbars with separate colors for light and dark themes.
- **Improved Text Selection:** Customizes the `Ctrl+A` shortcut on Windows/Linux and `Cmd+A` on macOS to focus the editor and select its contents.
- **Cleaner Interface:** Hides selected page elements, including the footer, SEO section, and tab-close controls.
- **Custom Text Highlighting:** Changes text-selection colors for light and dark themes.
- **Tab Styling:** Adjusts tab spacing and adds a blue top border to the selected tab.
- **Heading Customization:** Applies custom styling to H1, H2, and H3 elements inside the editor.
- **Manifest V3:** Uses the Chrome extension Manifest V3 format.

## Project Structure

```text
notepad-neo-css-addon/
├── manifest.json
├── custom_script.js
├── custom_style.css
└── icon.png
```

### File Overview

- `manifest.json` — Defines the extension metadata, icon, target website, and content scripts.
- `custom_script.js` — Handles the custom select-all keyboard shortcut.
- `custom_style.css` — Contains editor styling, theme adjustments, scrollbar customization, and interface modifications.
- `icon.png` — Supplies the extension icon.

## Requirements

- Google Chrome or a compatible Chromium-based browser.
- Access to [Notepad Neo](https://notepadneo.com/notepad/).

## Installation

### Install Using Developer Mode

1. Download or clone this repository.
2. Extract the project ZIP if you downloaded it as an archive.
3. Open `chrome://extensions/` in Chrome.
4. Enable **Developer mode**.
5. Select **Load unpacked**.
6. Choose the extracted `Notepad_Neo_CSS_Addon` project folder.
7. Open or reload [Notepad Neo](https://notepadneo.com/notepad/) to apply the extension.

If the page was already open during installation, reload it so the content scripts can run.

## Usage

1. Install and enable the extension.
2. Open Notepad Neo at `https://notepadneo.com/notepad/`.
3. Use the editor normally; the custom styles are applied automatically.
4. Press `Ctrl+A` on Windows/Linux or `Cmd+A` on macOS to trigger the extension's custom select-all behavior.

No toolbar button or separate settings page is included.

## How It Works

The extension uses a Manifest V3 content-script configuration.

The manifest targets this page:

```text
https://notepadneo.com/notepad/
```

The CSS and JavaScript are configured to run at `document_start`.

### Keyboard Shortcut

When the extension detects `Ctrl+A` or `Cmd+A`, it:

1. Prevents the default keyboard event.
2. Focuses the element with the ID `editor-paper`.
3. Calls `document.execCommand('selectAll', false, null)` to select the editor's content.

This behavior depends on the target website retaining the expected `editor-paper` element and compatible editor behavior.

### Styling

The stylesheet customizes several parts of the interface, including:

- Editor padding and appearance.
- Dark-mode editor-paper styling.
- Scrollbar width, track, thumb, and hover colors.
- Text-selection colors.
- Tab spacing and selected-tab borders.
- Heading colors and backgrounds.
- Visibility of selected interface elements.

## Customization

### Modify Editor Styling

Edit `custom_style.css` to change the editor's appearance, padding, scrollbar colors, text-selection colors, or heading styles.

### Modify Keyboard Behavior

Edit `custom_script.js` to change how the select-all keyboard shortcut is handled.

### Change the Target Website

The current extension matches only:

```text
https://notepadneo.com/notepad/
```

If you change the target URL in `manifest.json`, ensure that the new page contains the elements and selectors expected by the CSS and JavaScript.

## Limitations

- The extension is designed specifically for Notepad Neo's current page structure.
- It does not implement a standalone text editor.
- It does not add cloud synchronization, note export, or note-management functionality.
- The custom select-all behavior relies on the `editor-paper` element.
- Website updates may change element IDs, classes, or behavior and require corresponding extension updates.
- The extension does not include a settings page or configurable options.

## Contributing

Contributions, bug reports, and suggestions are welcome.

Before submitting changes, test the extension on the target Notepad Neo page and verify that keyboard selection, theme styling, and editor usability continue to work as expected.

## License

No license file is included in the supplied project.

Unless a license is added, do not assume the project can be freely reused, modified, or redistributed. Add a `LICENSE` file if you want to specify the terms under which others may use this code.
