It began with a simple idea: a save button for users to save their favorite
recipes. I wanted the save button to be a reusable partial I could sprinkle
around to all the places users interact with recipes - the summary cards in a
search response, and the recipe#show view.

I first got it working as part of recipe#show, and I figured it would
be straightforward to pull it out into a partial. That's when the odd behavior
started.

First, the button itself is actually a small form, as I talked about in the last
post about remote forms. There's a hidden input named :addFavID that carries the
ID of the recipe in question, so the controller knows what recipe to add to the
user's favorites list. The form submits remotely to the user_profile controller,
which then looks up the currently-logged-in user with Devise-gem helpers, and
then either adds or removed the recipe from the user_profiles.favorites
association for the logged-in user, depending on the HTML verb the form sent
(POST or DELETE - determined by a checking the user's favorites list when the
page is loaded, to see if this recipe is already saved). 

After doing its duty, whichever action was called then (supposedly) fires off
the associated JS view, which in both cases finds the save button's div
container and flips the image to the correct state ("Save" or "Un-Save").

The first thing I noticed was that the image wasn't changing on click. The
server logs showed that the request was still getting sent, but when rendering
the partial view with JS, the controller complained that the instance variable
it needed to set the :addFavID attribute was actually nil. Some amount of time
and hair-pulling later, 
