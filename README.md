# Fontsampler WordPress Plugin (Fork)

This is an **actively maintained fork** of the original Fontsampler WordPress Plugin, updated for WordPress 6.7+ and PHP 8.x compatibility.

## 🚀 Current Status

**Development Status:** ✅ **ACTIVELY MAINTAINED**

This fork is currently being developed and maintained by:
- **Abdurrahman Hanif** ([@abdrhnf](https://github.com/abdrhnf))
- **Bahasatype** ([bahasatype.com](https://bahasatype.com))

**Repository:** [https://github.com/abdrhnf/fontsampler-wordpress-plugin](https://github.com/abdrhnf/fontsampler-wordpress-plugin)

**Original Plugin:** [https://github.com/kontur/fontsampler-wordpress-plugin](https://github.com/kontur/fontsampler-wordpress-plugin) (Development discontinued as of December 2023)

## ✨ What's New in This Fork

This fork includes important updates and fixes:

- ✅ **WordPress 6.7+ Compatible** - Fixed compatibility issues with the latest WordPress version
- ✅ **PHP 8.x Compatible** - Fixed deprecation warnings for modern PHP versions
- ✅ **Security Improvements** - Enhanced input sanitization for AJAX handlers
- ✅ **Bug Fixes** - Fixed HTML output errors in admin interface preview
- ✅ **Better Code Quality** - Improved error handling and code structure

## 📖 What is Fontsampler?

Fontsampler is a WordPress plugin that allows you to embed interactive webfont previews in your websites. Perfect for type designers, lettering artists, foundries, and font resellers who want to showcase their fonts with an interactive tester.

## 🎯 How Does It Work?

After installing and activating the plugin, you can create **Fontsamplers** in the WordPress admin. Each Fontsampler can be embedded in any WordPress Page or Post with a simple shortcode:

```
[fontsampler id=123]
```

The plugin will render an interactive interface where visitors can:
- Type and test fonts in real-time
- Switch between multiple fonts
- Adjust font size, letter spacing, and line height
- Test OpenType features
- Customize text alignment and colors

## ⚙️ Configuration

Each Fontsampler instance can be fully configured:
- **Features available** to the user (sliders, buttons, dropdowns)
- **Styling and layout** order
- **Fonts** used in this instance
- **Custom CSS** styling

## 🔧 Advanced Shortcode Use

### Set Initial Text

Override the Fontsampler's initial text:

```
[fontsampler id=123 text="Lorem ipsum"]
```

### Dynamic Fonts

Pass fonts dynamically without defining a Fontsampler in the admin area. This will use default settings:

```
[fontsampler fonts='{"woff":"\/path-to\/fontfile.woff","name":"Display name","initial":true}']
```

The fonts attribute takes a JSON-encoded array (without opening/closing brackets).

### Programmatic Use

Use with WordPress' `do_shortcode()` function:

```php
<?php
echo do_shortcode('[fontsampler id=1]');
?>
```

Or dynamically load fonts based on template data:

```php
<?php
$fonts_json = json_encode([
    ['woff' => '/path/to/font.woff', 'name' => 'Font Name', 'initial' => true]
]);
echo do_shortcode('[fontsampler fonts="' . $fonts_json . '"]');
?>
```

## 🎣 Hooks

### Filter: `fontsampler_enqueue_styles`

Fontsampler styles are automatically added to pages with the shortcode. If executing the shortcode programmatically and want styles in the header:

```php
add_filter('fontsampler_enqueue_styles', '__return_true');
```

## 📡 JavaScript Events

React to Fontsampler events in your theme:

### Available Events

- `fontsampler.event.afterinit` - Called when fonts are loaded and Fontsampler is active
- `fontsampler.event.activatefont` - Called when a font is switched
- `fontsampler.event.activateopentype` - Called when OpenType dialog opens
- `fontsampler.event.activatealignment` - Called when alignment button is pressed
- `fontsampler.event.activateinvert` - Called when invert button is pressed
- `fontsampler.event.activatefontpicker` - Called when font picker dropdown is activated
- `fontsampler.event.activatesampletexts` - Called when sample texts dropdown is activated
- `fontsampler.event.changefontsize` - Called when font size changes
- `fontsampler.event.changelineheight` - Called when line height changes
- `fontsampler.event.changeletterspacing` - Called when letter spacing changes

### Example Usage

```javascript
$("body").on("fontsampler.event.afterinit", ".fontsampler-wrapper", function (event) {
    console.log("Fontsampler initialized!");
});

$("body").on("fontsampler.event.activatefont", ".fontsampler-wrapper", function (event) {
    console.log("Font switched:", event);
});
```

## 📦 Installation

### Option 1: Install from GitHub (This Fork)

1. Download the latest release from [GitHub Releases](https://github.com/abdrhnf/fontsampler-wordpress-plugin/releases)
2. Extract to `wp-content/plugins/fontsampler`
3. Go to WordPress Admin > Plugins
4. Activate "Fontsampler"
5. Access plugin options in sidebar under `¶ Fontsampler`

### Option 2: WordPress Plugin Directory (Original Version)

The original version is available at [WordPress Plugin Directory](https://wordpress.org/plugins/fontsampler/), but development has been discontinued.

## 🔧 Requirements

- **WordPress:** 5.0 or higher (tested up to 6.7+)
- **PHP:** 7.0.0 or higher (PHP 8.x recommended)

## 🤝 Contributing

**Pull requests are welcome!** Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For issues or feature requests, please open an issue on the [GitHub repository](https://github.com/abdrhnf/fontsampler-wordpress-plugin/issues).

## 📝 Alternative for Developers

If you're a developer looking to implement similar functionality, check out [fontsampler-js](https://github.com/underscoretype/fontsampler-js) - the JavaScript library that powers this plugin.

## 📄 License

This code is distributed under the **GNU General Public License v3.0**.

[See license](LICENSE.txt) | [Read simplified version](http://choosealicense.com/licenses/gpl-3.0/#)

## 👤 Credits

**Original Developer:** Johannes Neumeier (2016-2021)  
**Current Maintainer:** Abdurrahman Hanif ([@abdrhnf](https://github.com/abdrhnf)) from [Bahasatype](https://bahasatype.com)

---

**Note:** The original plugin development was discontinued in December 2023. This fork continues development with focus on WordPress 6.7+ and PHP 8.x compatibility.
