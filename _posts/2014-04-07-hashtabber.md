---
title: HashTabber
description: "A simple plugin for tabbed navigation."
slug: hashtabber
categories: [code, design]
gallery:
    - hashtabber-01-logo.png
    - hashtabber-02-palette.png
    - hashtabber-03-diagram.png
    - hashtabber-04-website-1.png
    - hashtabber-05-website-2.png
    - hashtabber-06-website-3.png
    - hashtabber-07-website-4.png
layout: project
---

[HashTabber](http://hashtabber.smutnyleszek.com) is a simple `JavaScript` plugin for tabbed navigation with hash-driven links.

The plugin was featured i.a. on:

- [unheap.com](http://www.unheap.com/navigation/horizontal-tabbed/hashtabber/)
- [jquer.in](http://jquer.in/javascript-frameworks-for-developing-rich-applications/hashtabber/)
- [jquery-plugins.net](http://jquery-plugins.net/hashtabber-simple-hashchange-driven-tabbed-navigation)
- [jqueryscript.net](http://www.jqueryscript.net/blog/10-New-jQuery-Plugins-You-Have-To-See.html)
- [jplugins.net](http://www.jplugins.net/hashtabber/)
- [softpedia.com](http://webscripts.softpedia.com/script/Menus-Navigation/HashTabber-83059.html)
- [bestplugins.com](http://www.bestplugins.com/articles/jquery-plugins.html/)

In some free time I built a simple logo based on the shapes of "#" and "T" characters and the tabbed interface itself. Visually, I dressed it in jade green and some warmer grays.

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-01-logo.png" title="Simple logo of the project" %}

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-02-palette.png" title="Color palette" %}

*Modus operandi* of the script is more precise and technically-wise described [on the website of the project](http://hashtabber.smutnyleszek.com), but in short it can be described by the following diagram:

1. You activate the tab (a simple hash link)
2. Ther browser's address changes
3. The script waits for change of the address, from where it gets the name of the new tab
4. The script pairs the tab with its content
5. The script turns off the old tab with content and turns on the new one

This may sound banal, but thanks to the hash links, the page doesn't reload and you can change tabs from the outside. And the whole functionality is minimalistic, slick and ready for use with very low requirements.

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-03-diagram.png" title="Diagram" %}

The page didn't need practically nothing but some smooth typography -- I used *Source Sans Pro* from Paul Hunt, a slim modular scale and a few clever `media queries` for mobile devices.

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-04-website-1.png" %}

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-05-website-2.png" %}

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-06-website-3.png" %}

{% include modules/picture/picture.liquid dir=page.slug filename="hashtabber-07-website-4.png" %}

In addition, the entire script is [availabe in the Public Domain](https://creativecommons.org/publicdomain/zero/1.0/), i.e. for free.
