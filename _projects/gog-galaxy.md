---
title: GOG Galaxy
description: "A desktop application for millions and few AAA games"
categories: [code]
year: "2014-2018"
---

Application
Web services
Website (/galaxy)

i was hired as a single lone-wolf frontend developer to work on an already started win/mac client for GOG.

initially I had to cleanup the layout and only then working on bringing up new features
it was hard as I couldnt do regular code review on such a big project, but i did manage to not build anything dangerous into the apps architectute
while learing all the bits and parts of then actual frontend, I ve rebuilt/refactored it with AMCSS modules and a conservative palette of colors. It served it purpose, as I didnt need to write much styles after that for a long time. cons: i did overdo some css modules, that grew too big and become a tad hard to maintenance

i took part in reeleasing the first public version of galaxy - for that i was also responsible for creating a galaxy subpage on gog. it took place together with TW3 release

then we decided (finally!) to grow the team. we gained one frontend dev, then one of the cpp started learning frontend ways. i was able to inyroduce them to the huge project quite smoothly. thanks to this new team we were able to simplify our workflow (no vagrant, no php, zero bullshit). we introduced some linters and rules. they tought me lot of stuff and we started working on with code reviews. we also did start having unit tests and our own private npm server for small cross-project modules

now we could start thinking much bigger and we brought up fully functional chat, we brought ingame overlay project from long lasting infancy, desktop notifications

## The Witcher 3

I was in a team responsible for the activation process of the game. You see, the game boxes sold had cd with 99% game files and Galaxy client installer. You could buy the game before release and then on release date only a tiny patch was released that made the game working. This means that we had to be completely sure the process will not fail. TW3 is a really heavy game (~40GB) and having it playable on day one was really important.
In my team I was responsible for frontend part of galaxy
(Activation flow, credits)

https://youtu.be/ph_OXoQJ840?t=570

{% include modules/picture/picture.liquid file="path/filename.extension" caption="Title, YYYY" %}
