---
layout: post
author: chris
date: 2020-03-18 00:00:00 -0400
---

I decided to remove the hamburger menu from the mobile view. Like I said
yesterday, I just don't like the collapse animation. Maybe it's because my
laptop is underpowered (it's a $200 HP Steam laptop - I didn't have a lot of
money to spend), but it also pushed page content around to make room for the
content, and I don't like that in a navbar. I'm sure there's ways to make it
pop-over real nice with something marginally more advanced than vanilla
Bootstrap, but I'm not sweating the stylistic details yet, so I settled on the
simple solution: Plain Old Buttons.

Next, I finally made the recipe search results into something more than just
plain links. I'm going with Bootstrap's cards for now, because I'm trying to
keep it simple until I can dive straight into React, and cards are the
easiest/most complete thing that I can set to a fixed width and layout
responsively. For now the cards are 350px wide, but I noticed that fixed width
elements create a huge amount of white space when the viewport is just under a
multiple of card width (not big enough to fit an extra one horizontally). As
long as everything stays centered I guess it'll be fine for now.

Also for the record, getting cards to align and center correctly was a real
pain in the rear, fiddling with the padding and margins on the cards and the
container divs. Part of it was my fault, because the layout I've been patching
together was a noobish mess, but also partly because the Bootstrap spacing
utilities measure in rems, so I had to figure out which elements needed padding
and which needed auto-margin, which meant actually needing my brain. Ugh.

Other minor changes: the un/favorting action in the UserProfile controller
redirects back instead of to the recipe show view, so you can favorite right
from the search results (the card has a button, eventually it'll be a small
heart or something). Still no AJAX, which is coming, but for now redirect-back
is good enough since the browser remembers the filter selections. Had a weird
problem with the favorite button in the recipes#show view - instead of putting
the recipe ID in the buttons hidden form input, it put a random nonce. I
fiddled with it but ultimately changed nothing, and it went away on its own.
Weird.

Finally, I added new columns on the recipe model: prep time, cook time, and a
path for the recipe cover image, which is unused for now. Right now they're all
displayed as numbers on the recipe card, but I'll probably replace it with a
visual grid or something to show recipe stats at a glance - meat, vegan,
overall hands-on time required, difficulty (measured by number of steps),
number of ingredients required (which has an impact on difficulty), or if any
rare or exotic ingredients are required. I can do most of this through
ingredient tags and model functions, I just need a sensible way of designing
the UI to show it. I still want to fit in a 350px wide card, but if I make the
350px the short side of the golden ratio, I can extend the vertical length of
the cards from 216px to about 566px. Although I like the keeping the width 
longer than the height, as traditionally recipe cards are 3x5 index cards.
