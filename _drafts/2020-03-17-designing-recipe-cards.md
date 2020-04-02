---
layout: post
author: chris
date: 2020-03-17 00:00:00 -0400
---


  - (3-17-2020) I decided to remove the hamburger menu from the mobile view.
  Like I said yesterday, I just don't like the collapse animation. Maybe 
  it's because my laptop is underpowered (it's a $200 HP Stream laptop
  - I didn't have a lot of money to spend), but it also pushed page content
  around to make room for the content, and I don't like that in a navbar.
  I'm sure there's ways to make it pop-over real nice with "modern" tech but
  I'm not on to React yet, so I settled on the simple solution: Plain Old
  Buttons.
    I finally made the recipe search results into something more than just
  plain links. I'm going with Bootstrap cards for now, because I'm going 
  with just Bootstrap for now, and cards are the easiest/most complete thing
  that can I can set to a fixed width and wrap in Bootstrap layout classes
  to automatically lay out the rows of cards depending on how wide the viewer's 
  window is. For now the cards are 350px wide, but in the future I'd like
  to ask the browser for the viewport width and adjust the cards size slightly
  so there isn't a huge amount of white space when the screen width is near a 
  multiple of 1.5x card width, but as long as everything stays centered I 
  guess it'll be fine fixed at 350px.
    Also for the record, getting the cards to align and center correctly was 
  a real pain the rear, fiddling with the padding and margins on the cards
  and the container divs. Part of it was my fault, because the layout I've
  been patching together as I go was a real mess, but also partly because
  the Bootstrap spacing utility classes measure in rems, so I had to figure
  out which needed padding and which needed auto-margin, which meant actually
  using my brain. Ugh.
    Other minor changes: changed the un/favoriting action in the UserProfile
  controller to redirect back instead of to the recipe show view, so you can 
  favorite right from the search results (the card has a button, will be a small
  heart eventually). Still no AJAX, which is coming, but for now redirect-back
  is good enough since the browser remembers your filter selections. Had a
  weird problem with the favorite button the recipe#show view, it was putting
  a nonce instead of the recipe ID into the form hidden input but stopped
  after I fiddled with it, even though I ended up changing nothing. Weird.
