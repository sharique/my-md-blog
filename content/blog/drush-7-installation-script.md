+++
date = '2014-12-19T00:17:51+02:00'
draft = false
title = 'Drush 7 Installation Script'
tags = ['Drupal', 'Drush', 'local development']
+++
To work with Drupal 8, we need Drush 7, which is in alpha stage of development. So there no package available for distribution (like Ubuntu, OpenSuse). Installation of Drush 7 is not as simple Drush 6, if you not familiar with composer, you may find it difficult to install, so I've written a shell script, which can be used to install Drush 7.

<script src="https://gist.github.com/sharique/f870613184713f7ed535.js"></script>
This script install drush 7 for normal user, you don't need root access to run it.
