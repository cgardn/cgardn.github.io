---
layout: post
author: chris
date: 2020-03-16 00:00:00 -0400
---

Well, I guess it's time I start blogging about this. I've been working on
Hyperchef (working title) for about a month now, in place of The Odin Project's
Rails final project. They wanted me to replicate Facebook, mainly to get
experience with users and ActiveRecord associations. I wanted something
different though, something more useful to me than a fake social media site, so
I'm building a recipe site instead.

Most advice on finding ideas is a some variant of "solve a problem you have
yourself," and something I've encountered recently while trying to improve my
cooking skills is that all recipe sites are universally **terrible**. 

All I wanted was a recipe for Coq Au Vin to impress my wife, but after the 
fifth site in a row made me scroll through ten paragraphs on the author's 
personal history of cooking to get to the actual instructions, I decided the
internet *does* in fact need one more recipe site. One that cuts out all the 
fluff, and maintains the shortest possible distance between "what do I want to
eat" and "here's how to cook it." No prose, no extended history of cheese
sauce, just meals with instructions. I also wanted to target people like me,
people who can turn on the oven and fry an egg, but don't really know all the
ins and outs of cooking techniques, or how long a recipe *actually* takes vs. 
how long the author thinks it takes.

Thus: [Hyperchef](https://hyperchef.herokuapp.com). I've probably already spent
more time on this than I would have on the final project, mainly due to the 
more complicated data models I've put together to support features that won't
get built for some time. Instead of each recipe having a table of ingredients
with a little sprinkling of JS to change number of servings or from imperial to
metric units, everything lives in its own table in the database exactly once - 
even ingredients. Recipes are basically just a set of text steps and a bunch of
references to ingredients and what cookware is involved. Quantities of 
ingredients are saved on the join model between recipes and ingredients. I'm 
not sure if it's actually more "efficient" than just writing a recipe on a page
and doing everything with JS, but I'm pretty proud of myself for putting it all
together. Once I add users and saving favorite recipes I'll have covered 
everything the Odin Project wanted me to get out of the final project, but I'll
probably keep going a bit further. I want to be able to take those favorite
recipes, add them to a weekly meal planner (or at least to a titled list), and
press a button to get a tabulated grocery list that sums all the ingredients
from all the recipes you picked for easy shopping. That's the tool I want that
doesn't exist, so once I can do all that I think I'll be satisfied.
