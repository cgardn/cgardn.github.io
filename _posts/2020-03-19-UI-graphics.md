---
layout: post
author: chris
date: 2020-03-19 00:00:00 -0400
---

OK! After a lot of trial and error, now there's a (relatively) consistent
look-and-feel to the UI. I'm going for a vaguely-SNES-retro-game theme, just
enough to appeal to the kind of people who spend a lot of time at home and want
to learn to cook, but don't feel like the typical Instagram/influencer cooking
world appeals to their aesthetic, aka...ME.

I mentioned last time about settling on 350px wide Bootstrap cards, and I spent
half the day yesterday fiddling with pixel art editors (mtpaint and
GraphicsGale) to put together some images to serve as UI elements. I'm using
modified free art from two amazing artists, [KenneyNL](https://www.kenney.nl/)
and [Henry Software](https://henrysoftware.itch.io/pixel-food). After an hour or
two getting the link visited/hover styles right and fixing a couple missed
pixels on some of the images, I think I'm finally ready to launch!! Well,
soft-launch at least. I'm not going full announcement mode until after I have
the site up on Heroku and full of at least 100 recipes. That's going to take
some time though, since typing everything in takes a while, plus I have to add
all the tags and ingredients too. The admin pages for creating and editing
recipes/ingredients/tags are totally unstyled, but no one will ever see them but
me so I can put that off for now.

I also thought of adding the recipe tags to the card in the form of little
badges or icons. Besides vegetarian, meatless, vegan, and gluten-free, I'll also
have paleo, hands-off (meaning most of the time is in the oven or something, or
less than say...10 minutes prep time), and one-pot (everything in one pot,
limited cleanup). Or maybe I'll just make that one a "limited cleanup" badge?
Either way, after tinkering with the buttons and spacing I decided the badges
are best left to version 2 after launch, better test coverage, and the first big
refactor.

On a related note, what is the "correct" way to add the first admin user to a
website? I guess I just go into the Rails console and manually make myself an
admin? I've already blacklisted the admin attribute out of the user controller,
so I suppose as long as no one gains physical control of my laptop they can't
make themselves admin, but I'd have bigger problems by then anyway (like nuking
the whole site). I'm pretty noobish with security stuff still, which is a big
reason why I'm using Devise for auth and accounts - I rolled my own when I was
going through the [Hartl
tutorial](https://www.learnenough.com/ruby-on-rails-4th-edition-tutorial/beginning),
and from that experience I learned that I don't want to reinvent the wheel
unless I absolutely have to.

Other than that, we're almost there! I'd also like to add a subtitle to the main
page, something like "recipes without the fluff" but more punny, though I'm not
sure if that's too much visual clutter. I guess we'll see. I realized recently
I've been avoiding launch, partly because I'm going to have to spend the money
on a real Heroku instance, and partly because once it's live making changes
won't be so consequence-free as they are now. But I guess it's just another
learning opportunity! 

After that's it's just one more day for a quick resume site somewhere, and then
it'll be time to start blasting it all over the internet and find out how many
things I've done wrong! Can't wait! :)

### Quick update ###
D'oh - I forgot to add a link to the recipe cards that
actually lets you view the dang recipe! And I forgot to style the show
page...oi. So take everything I just said I did and add another 3-5 hours :))))
