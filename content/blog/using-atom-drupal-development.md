+++
date = '2016-05-30T00:09:06+02:00'
draft = false
title = 'Configure Atom editor for Drupal development'
tags = ['Drupal', 'Atom', 'local development']
+++

[Atom editor](https://atom.io/) (or just Atom) is free and open source text and code editor build by GitHub. It is build using Chromium, nodejs, CoffeScript and Less. There are few other editors build using nodejs, second most popular project is [Brackets](http://brackets.io/). I've tried both and found Atom stable among two. Another advantage Atom has more plugins than Brackets. Recently I'm started to using it as alternate for Sublime Text. It has many plugins for Drupal also. I'm using the following plugins:

1. [Drupal](https://atom.io/packages/drupal) - It provides Drupal snippets, filetypes association and hotkeys. Currently it only provide Drupal 7 snippets.
2. [Linter Drupalcs](https://atom.io/packages/linter-drupalcs) - It checks the code for Drupal coding standrd (aka drupalcs) errors in the code. To configure this make sure code sniffer and coder module is installed and manually provide path for Drupal coding standard file.
3. [Terminal plus](https://atom.io/packages/terminal-plus) It provides the terminal inside Atom editor window, it is very useful running commands like drush without moving away from code.
4. [Color picker](https://atom.io/packages/color-picker) - It provides the color picker while css editing.
5. [Atom autocomplete Php](https://atom.io/packages/atom-autocomplete-php) - It provides autocomplete functionality for PHP for composer base projects. Since it uses composer, it useful for Drupal 8 projects.
