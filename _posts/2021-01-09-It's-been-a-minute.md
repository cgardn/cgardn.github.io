Just like that, 9 months later.

Shortly after the last post, I was contacted through a thread on hackernews
and offered a spot on a small startup team working in the Mozilla Builders
program. I spent most of the rest of the year building a VueJS SPA frontend
solo and assisting on a NodeJS/MongoDB backend. The short version is, this
as-of-yet-unnamed startup is on indefinite hiatus due to a variety of
team-related obstacles, but maybe I'll get to tell you about it someday :)

Oh, and 2020 happened, too.

# But, now it's a new year, and that means new things!

I rewrote the [Hyperchef](https://cgardn.github.io/hyperchef/) frontend in
VueJS, because Vue is ~amazing.~ The Rails app got a full set of api routes,
and was upgraded to Rails 6. It doesn't look too different, but there's a few
decently large new things I want to go over:

## Recipe filter buttons that actually work
One of the main goals I had for Hyperchef was to make recipe discovery more
natural, and by that I mean more aligned with the way I personally think about
coming up with something to eat. 

My experience may not be universal, but I have two main problems when figuring
out what to cook:

- meal planning is a lot of mental energy
- tracking kitchen inventory is a lot of mental energy

No matter how well thought out or well-intentioned my shopping trips are, I
still wind up with a mish-mash of ingredients and leftovers, and even when I
find a recipe that I'd like to try, I never have everything I need.

Hyperchef's solution to this is inclusive/exclusive filter buttons of
ingredients, sorted by ingredient category. I want to approach recipe
discovery by just looking in the fridge and tapping all the things I actually
have, and see what recipes pop up. This drastically reduces the time spent
hunting through recipes, because by the time you're actually reading one
you're already guaranteed to have everything you need on hand. 

Selecting a filter is instant, removing everything that doesn't include
whatever you just picked. Select "tomato paste," and all recipes with no
tomato paste are gone. Adding additional filters further narrows your
selection. In the future you'll have additive-exclusive filters too, like
adding all the recipes that *don't* have chicken, for example.

I think it's pretty effective in practice, though there's hardly any actual
recipe content yet (I'm working on it). It also led to a somewhat radical
design choice - there's no text search bar. I don't think it's necessary, at
least for me. I only know what ingredients I have on hand, and
typing 5 or 10 things into a text box and hoping it gets what I mean is
annoying. Or even worse, searching for one of the ingredients and hoping
there's a decent "advanced filters" option after I wait through the initial
search.

### How it's done
Each thing that can be searched by (a 'filter') has a specific set of recipes
that it applies to, so each filter gets an array with all those recipe IDs.
Since array intersections are commutative, it's just a series of array
intersections between the selected filters' recipe lists and the list of all
recipes.

These lists are built for recipe types (breakfast, dinner), and ingredients
(beef, tomato paste). There are plans to include ingredient tags (meat,
vegetable) as toggles too, plus other categories (kosher, halal).

All of these lists live in a hash, keyed by the text name of the filter. This
keeps things quick when finding the list for whatever button was pushed.

After the intersections are done, the remaining list of ids is checked against
a hash of all the recipes, where each key is the numerical recipe ID. This is
because as recipes are added or deleted, the recipe IDs may not remain a
contiguous set of numbers, so I need a hash to guarantee direct access and
avoid array searching. Assigning recipes to a particular spot in an array
matching their ID would waste space on empty array slots for IDs that aren't
used.

## Caching on the backend
That brings me to the next piece - making it efficient. Performing these array
operations on the backend could work just fine, but my budget for server time
is extremely limited, so a primary design goal was pushing as much computation
to the client as possible. Since all the filter arrays are static data, I
put them in Rails' memory cache and send everything to the client on the
initial pageload, where Vue handles the actual array operations.  The only
recipe data required for the search page is just what's required to display on
the clickable cards (title, required time, and a numerical score for
ingredient count and relative complexity). Since there's no ads and just one
image (the hero graphic), the total pageload size is still quite small - the
search data for the test database of 500 recipes fits into less than 100kB.
There's also plenty of room left for optimization, like shrinking the
attribute names to reduce the number of characters being sent. If I ever find
the time to grow the recipe count into the thousands I may need a different
strategy, but that's a long way down the road from here.

## Admin panel
No one will ever see them, but I added basic admin panels for adding and
editing the resources - which is good, because they're incredibly ugly ;)

## Minor design change
Finally, there's a slightly new look as well - the custom images are gone,
replaced with a much lighter flat theme with Bootstrap (css only).  No fancy
transitions yet as there hasn't been a lot of time for polish, but that's
coming Soon&#8482;.

Overall, I'm happy with the progress, but not the current state. There's a ton
of things on the TODO list, including but not limited to:
- More compact design of the filter panel
- MUCH more content
- Toggling whole filter categories at once
- Dietary restrictions as filters (gluten-free, Jain-friendly, etc)
- Actual consideration of modern aesthetics
- CSS transitions to make it \*fancy\*

I'm focused on the job hunt for now, but once things settle down progress will
continue. Onward!
