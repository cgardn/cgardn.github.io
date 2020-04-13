Spent the day working on test coverage, since I had basically none (oops \*\_\*).
A little painful at first, but I'm getting the hang of it.  ~~Unfortunately~~ I
got the _opportunity_ to learn a bunch of things, one of which is that I
probably shouldn't require all attributes of a model to be present in order to
process an update. If only one attribute comes in, as long as it's on the
whitelist the app shouldn't get hung up on the attributes that aren't there.
And manually typing in a bunch of params hashes for testing model updates has
made that painfully clear. :) 

I also ran into an as-of-yet-unsolved problem with test fixtures - how do I
describe ActiveRecord associations in YAML? I'm sure there's some Railsy
special syntax sauce that will let me do it, but I tried the "official"
rubyguides way of id-less labelling and it didn't do squat. The problem lies in
the \_header partial, the navbar. When you're logged in, the "Sign-in" button
is replaced with a "Profile" button, which for now just shows you a list of all
the recipes you've favorited (eventually that's where you'll make meal plans
and grocery lists and whatnot as well). That view creates the link with a
reference to current\_user.user\_profile, but user\_profiles are a separate
model from users, connected through a join table, and since I can't figure out
associations in the test fixtures, any testing that logs in and then visits any
page with the "Profile" link fails on account of not being able to load
current\_user.user\_profile and build the link.

Sigh. This means that I can't verify that the admin is allowed to do things
like create/update/destroy recipes, ingredients, or whatever. I have to be
satisfied with only verifying that non-logged-in and non-admin users **can't**
do those things, which is to say I'm not satisfied at all. In fact I'm super
bothered by it, but I spent quite a bit of time hunting through the tubes for
answers and got nothing, so I'm moving on to finish the rest of the tests and
come back after. 

That said, I've only gotten through recipes and most of ingredients. I still
have equipment and both kinds of tags. I haven't even gotten to model testing
yet, though thankfully Hyperchef is still 99% REST so that stuff should go
quick when I get there.

Other than that, I continue to march toward launching. Still need to add
roughly a billion more recipes to make it look real, not to mention that it
doesn't look anything like a "modern" recipe website with giant pictures of
food or anything, but hopefully that doesn't get in the way. I can always
change it if I get a lot of "Soo....this is it, huh?" from friends and family.
