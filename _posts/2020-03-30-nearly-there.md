---
layout: post
author: chris
date: 2020-03-30 00:00:00 -0400
---

Been a while since the last post, but I'm finally almost ready to launch! Lots
of fixing small things that keep falling through the cracks because I changed
something ten miles away.

For example, I updated the way ingredient quantities are recorded; now each
ingredient has a standard 1-person serving size baked in (heh) in two different
ways: 1 "show" amount and unit that appears on the recipe, and one "list"
amount and unit that will get used in the grocery list when I eventually get to
that feature. This way you can pick five recipes that each call for "2 carrots"
but the grocery list will tell you to get 3 lbs. of carrots instead of 10
individuals.

This is a little less flexible than the old way (per-recipe ingredient
quantities saved on the recipe-ingredient join table), as it assumes all recipes use
roughly the same amount of a given ingredient per person, but it's much faster
for defining new recipes (I just check the box if the ingredient is required),
and much less data to worry about maintaining - ingredient quantities are calculated
from one central place rather than each living on their own table.

Farther down the road I'm going to re-add recipe-specific amounts with some
kind of "fudge factor," but most recipes actually do use the same amount of
things give or take, and flavor experience comes down to which foods and
flavorings you combine, at least for most simple meals, which is what I'm
targeting for now. Baking is another matter,
which is why that can was firmly kicked. I'll also allow future users to save
customized amounts of ingredients on their saved recipes as they experiment and
find their particular taste, which will give people another reason to sign up.

---

Despite all this, progress feels slow even though I'm checking things off every
day. I totally get why everyone says you have to focus on "just
shipping it." Yet, I've reached a minor milestone - I'm finally adding more
things to the "post-release" to-do list than the "gotta do this right now"
list. All I have left is adding some more actual content, a few minor
style/color things, tidying up the routing file, and setting up emails for
signup confirmations and password resets. After that I'm gonna announce to
friends and family, and MAYBE re-do the card graphics without anti-aliasing, or
at least with a proper font that has the pixelated look, since the 
anti-aliasing on the fixed width graphics is fuzzy on larger screens.

After it's live I'll be diving into basic test coverage, and later some kind of
log filtering so I can see errors at a glance. Or at least, I'll get a little more
familiar with Heroku's addons and options.

---

On a personal note, the coronavirus pandemic got me down a bit - it's hard to
focus and stay excited about getting a new job while everyone else is
scrambling to keep theirs. Honestly, I'm a little worried about downsizing
happening right when I start looking in a couple weeks. I think that's just my
paranoia talking though - no one is me but me, so I'll just keep plugging
away at my portfolio and focus on building skills instead of worrying about
competition. There's always more dev work, so I'm sure there's a place out
there for me somewhere!
