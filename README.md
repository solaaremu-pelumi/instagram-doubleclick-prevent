# Instagram Double-Tap Preventer

A Chrome extension that prevents accidental double-tap/double-click likes on Instagram posts.

## Description

Instagram Double-Tap Preventer is a lightweight Chrome extension that blocks the default double-tap/double-click behavior on Instagram, preventing accidental likes when browsing through posts. This is particularly useful for users who:

- Have a touchscreen device
- Frequently accidentally like posts while scrolling
- Want more control over their Instagram interactions

## Features

- Blocks double-tap likes on mobile devices
- Prevents double-click likes on desktop
- Works across all Instagram pages
- Zero configuration needed
- Minimal performance impact

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## How It Works

The extension works by:
- Intercepting double-click events on desktop
- Detecting rapid touch events on mobile devices
- Preventing these events from triggering Instagram's like feature

## Technical Details

The extension uses:
- Manifest V3
- Content Scripts for event interception
- Touch and click event listeners

## File Structure

```
instagram-doubleclick-prevent/
├── manifest.json
├── content.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Contributing

Feel free to submit issues and enhancement requests!