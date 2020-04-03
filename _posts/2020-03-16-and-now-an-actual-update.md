---
layout: post
author: chris
date: 2020-03-16 01:00:00 -0400
---

Now that the intro stuff is out of the way, here's what I did today:

Since Bootstrap is "mobile-first" I focused mainly on mobile styling, fiddling 
with buttons and stuff. I tried putting profile/login/signup links in a 
hamburger menu that only shows on mobile, but the default collapse animation
feels clunky, and I don't like how it pushes the content down to make room for
the expanded menu. I could probably tinker with the animation, maybe remove it,
but that seems like a lot of work for what amounts to 4 buttons shown 2 at a
time at most (Profile/Logout and Login/Signup). I have a lot of ground to cover
before I can really start showing this off as a portfolio project, so I'm 
trying to avoid rabbit holes.

I've been taking design cues from the amazon mobile site for interacting with a
searchable database of items (well, recipes, but functionally similar just 
without cart+checkout). They use a hamburger/flip-out type menu, but I don't
imagine I'd ever have as extensive a side-menu as Amazon, and I have some 
pretty strong opinions about UI and hiding things from the user (i.e. don't do
it unless you really have to), so I think it's best to just remove the 
hamburger and try to keep the buttons small enough to fit on the header. I also
have an image that brings you back to the home page, and I'd like to add one
more button for "Back to Search," so I can't justify a hamburger when there's
enough space to fit everything without one.

Finally, I am aware that my UI powers are held back by not using React or some
other modern frontend framework, but I'm still wrapping my head around the 
Rails backend stuff, so I'm keeping it vanilla Rails server-side-rendering for
now. I can always build a React frontend later (and I intend to).
