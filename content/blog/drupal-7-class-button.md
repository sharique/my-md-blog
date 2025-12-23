+++
date = '2013-11-13T00:27:25+02:00'
draft = false
title = 'Adding additional class to a button in drupal 7'
tags = ['Drupal', 'Drupal 7', 'Button', 'Class']
+++

Recently we were building a multi-domain site, we are using the same theme for all sites but we want to have different colors for buttons for each domain. We achieved this using my overriding theme_button in template.php of theme, here is the snippet.

```
/**
 * Overwrite theme_button()
 * @file template.php
 */
function mytheme_button($variables) {
  $element = $variables['element'];
  // Add some extra conditions to make sure we're only adding
  // the classto the right submit button Now add our custom class
  if (isset($element['#attributes'])) {
    $element['#attributes']['class'] [] = 'button';
    $domain = domain_get_domain();
    $element['#attributes']['class'] [] = $domain['machine_name'];
  }
  $variables['element'] = $element;
  return theme_button($variables);
}
```
