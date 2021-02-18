---
layout: post
author: chris
date: 2020-04-06 00:00:00 -0400
---

My test coverage has officially gone from zero to some. Now tests cover every
user-facing page for a successful response, every resource-modifying action
(create, update, destroy) for unauthorized access, and as many of the model
functions as I could manage without associations; as I mentioned last time I
haven't figured out how to get those working in the test environment yet. 

### Things writing tests has exposed about my code 
  - Code in the wrong place
    - A recipe model function that deals mostly with ingredients was not only
      obseleted by something I changed a while ago, but is now on wrong model
      entirely. It was probably on the wrong model to begin with, but I
      couldn't see that when I wrote it.

  - Not enough done programatically 
    - Ingredient units are stored in a hash of arrays, and each element of the
      hash has a reasonably long name like "imperial\_show" or "metric\_list".
      It was the easiest/most sensible way I could think of to do unit
      conversions quickly: bake them in by putting a single "standard serving"
      on each ingredient in both imperial and metric units, then just multiply
      by the servings the user chooses on the page. Later I'll add a fudge
      factor for recipes that are more than just protein+veg+starch.  However,
      every time I want to build a new ingredient for a test, I have
      to write out the whole hash with all the long names, because I never
      thought of making a function to build the hash in one place.

In other news, the last couple TODOs for the first terrible version of
Hyperchef are done. Those items were connecting ActionMailer to SendGrid for
password reset mail, and styling the devise views to (mostly) match the rest of
the site.

My overall feeling about Hyperchef in its present state is...medium rare. It's
a fairly arbitrary "launch," and I'm definitely not done - I haven't even built
all the core features like grocery lists and the meal planner - but part of me
can't believe I'm actually about to finish a working version of something only
a month later. Wow, has it really been a month? That's when github says my
first commit was, but time sure flew by. 

After adding a few more of my favorite recipes to start out, I'm going to dive
into a huge first refactor, and honestly I'm really excited about it. I like
fixing and cleaning things way more than building things, so I can't wait to
pull out all the cruft that's accumulated while I figured out what the heck I
was doing as I built. There's quite a bit of old code that is now obseleted or
not even in use - I tend to leave things in place when I try new ideas. Not
sure if that's bad practice, but at the (small) scale I'm working I think
having to come back later and sweep the closets is worth the time savings and
speed, since I'm trying something new about a hundred times each day.

I'm also really lukewarm on the visual design now. Not the overall theme, I
like that part, but the way I've laid out the cards and especially all the
buttons just feels unprofessional and unfinished. I'm still getting the hang of
this front-end design business, but learning so much so fast has the
side-effect of constantly moving the goalpost of acceptable design. What looked
fine to me four weeks ago looked amateurish two weeks ago, and two-weeks-ago's
fixes look garbage today. Constant improvement! But also constantly feeling
like it's not good enough. It's fine, I like how much my eye is changing, now I
just hope my skills can keep up.
