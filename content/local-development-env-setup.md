+++
date = '2015-09-22T00:04:48+02:00'
draft = false
title = 'How do I setup my local development environment'
tags = ['Drupal', 'Netbeans', 'local development']
+++
Currently, my work is mostly focused on Drupal, but I've worked with C++, C#, and Asp.net. First I'm going to tell you about the general setup which is common for all technologies, after that I'll tell you about items specific to technologies.

Folder structure I keep all my projects inside the "Projects" folder in home directory, some distros have it by default, if it don't exist create one. Inside projects folder, I've one folder for each technology and inside this folder for each client/project, for example for a project xyz using drupal folder will be "/home/sharique/Projects/drupal/xyz". Inside this, I've some common folders like files (for various resources, like documents, site files, etc), tmp (everything uncategorized), docs ( for project docs like documentation, requirement docs, wire-frame, etc) and project code repositories. If there are many repos in the project it is better to have a repos folder, because for a large project over the period you end up creating many folders for different purposes. Even for web projects I follow the same structure and create either virtual host or symlink inside the www folder.

IDE I mostly used Netbeans and sublime text for most of my Drupal work. I also started using PhpStorm in office as my company has licenses. Netbeans has good support for Drupal 7, there is [a nice plug-in](https://github.com/HollyIT/NBDrupalDevel) but support for Drupal in PhpStorm is far better. Here is a blog post if you want to use it for [Drupal development](http://alexrayu.com/blog/benefits-netbeans-drupal-ide). IDE make doing things easier, either is formatting a file or building projects or debugging. My top reason for using an IDE is code completion and syntax errors and other warnings. IDE also uses a lot of resources, so for small things it does not make sense to use it. For small tasks, I use Sublime Text.
