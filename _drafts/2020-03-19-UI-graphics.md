---
layout: post
author: chris
date: 2020-03-19 00:00:00 -0400
---

  - (3-19-2020) OK! After a lot of trial and error,
  now there's a (relativey) consistent look-and-feel to the UI (going for
  a vaguely-SNES-retro-game feel, just enough to appeal to the kind of people
  who spend a lot of time at home and want to learn to cook, but don't feel
  like the typical Instagram/influencer cooking world appeals to their
  aesthetic, aka...me lol). I mentioned yesterday about settling on 350px
  wide Bootstrap cards, and I spent half the day yesterday fiddling with
  pixel art editors (mtpaint and GraphicsGale) to put together some 
  images to serve as UI elements. I'm using free art from two amazing
  game artists, KenneyNL and (food art guy from ItchIO, !!! INCLUDE LINKS !!!).
  After another hour or two getting the link visited+hover styles right and
  fixing a couple missed pixels on some of the images, I think I'm finally
  ready to launch!!! Well, soft-launch at least. I'm not going full
  announcement mode until after I have the site up on Heroku and full of at 
  least 100 recipes. That's going to take a while though, since typing 
  everything in takes a while, plus I have to add all the tags and ingredients
  as well. The admin pages for entering and editing recipes/ingredients/tags
  are totally unstyled, but no one will ever see them but me so I'm not that
  worried. Also, I'm not sure what the "correct" way to add myself an admin
  account is, I guess just going into the console and manually setting the
  admin attribute? I already have it all set up to not accept changes to
  the admin attribute anywhere, so I guess as long as no one gains control
  of my dev laptop and gets my SSL keys they can't make themselves admin, 
  but I'd have bigger problems by then anyway (like an attacker with that much
  control could just nuke the whole site with heroku destroy). 
  I'm pretty noobish with security stuff still, which is part of why I'm 
  learning Rails first and using Devise for auth and accounts - they handle
  all the basic stuff for you.
  Other than that, we're almost there! I'd also like to add a subtitle to the main page,
  something like "recipes without the fluff" (but more punny), but I'm not
  sure if that's too much visual clutter. I guess we'll see. 
  I've been avoiding launch as long as possible, partly because I'm 
  going to have to spend the $7 a month plus domain costs, and partly because
  once it's live making changes won't be so consequence-free as they are now.
  But I guess that's part of the process! Time to get used to updating live
  sites, especially since Hyperchef is supposed to be my main portfolio project. 
  After that it's just one more day for a quick resume site with Sinatra and
  then it'll be time to start blasting it all over the internet and find out
  how many things I've done wrong! Can't wait! :)
  - (3-19-2020 extra thoughts) While figuring out the recipe card, I 
  thought of several more visual badges I want to add in the form of
  recipe tags (which trigger the badges?). Besides vegetarian/meat-free, 
  vegan, gluten-free, I'll also have paleo, hands-off (meaning most of
  the time is in the oven or something, less than 10 minutes of hands-on
  prep time), and one-pot (meaning everything gets put in a single pot, 
  limited cleanup). Or maybe I'll go right with a limited cleanup badge?
  Either way, the badges and such are probably for version 2, after launch,
  test coverage, and the first major refactor.
  - (3-19-2020 UPDATE) D'oh - quick update, I forgot to add the links
  to the recipe cards that actually let you view the dang recipe! And
  I forgot about styling the show page! oops....take everything I said and
  add another 3-5 hours haha
