## Preamble

Hyperchef handles nearly all its buttons as forms. My first instinct was to 
make them AJAX calls, as is the modern way, but I immediately discovered that
documentation on using JS in Rails is...let's go with "incomplete." In the mad
scramble to accomplish ~~something~~ anything, I decided to save time on digging
for answers by doing form submissions by plain 'ol HTML requests.

It's been bugging me ever since that every button push triggers a full page
refresh, but it was good enough to keep going while I pushed through building
and learning at the same time.

## That brings us to today

Now that all the basic pieces were finally complete, along with a (very) small
set of sample data, it was time to get it done. Here's what I was up against:

  - ### Rails 5
    - I know Rails 6 came out a while ago, but I learned on
    Rails 5, and this is supposed to be Baby's First Real Project, so I stuck
    with what I knew.
    - Most of the Rails 5 documentation is out of date or incomplete. Even the
      official rubyguides and edgeguides don't really tell you what to do or
      where to put the various JS files. Also, the Hartl tutorial doesn't really
      go into this too much, and the old 4th edition is no longer free anyway.

  - ### Rails has long history
    - Since Rails has been around for 15 years, and its peak popularity is
      behind us, the majority of Stack Overflow questions are from outdated
      versions or make extensive use of jQuery (ew), which no longer ships with Rails
      as of v5.1. ES6 and the modern Web API are so great, I want to only write
      things using modern tools when possible.

  - ### Most blog posts are half-hearted attempts from bootcamp students
    - I don't expect to find everything in one convenient place, but most of the
      blogs I found about JS in Rails just kind-of-sort-of tell you how to use
      respond_to to make a basic API response, with no details about how Rails
      views interact with Javascript, where *.js files in various places are run
      and what functions are available in what place, or anything I needed to
      know to add JS flavor to my bland Rails soup. Given the popularity of
      Rails at bootcamps over the last decade, I have a sneaking suspicion that
      most of them are some kind of homework assignment: hastily prepared,
      missing key information, and usually hosted on Medium (ew again).

  - ### Assumed expert knowledge
    - This is a more general problem I'm sure we all face when learning
      something new, but nearly every source of information that isn't written
      by an amateur like me assumes expert-level knowledge in web development.
      I had to piece the answers together from multiple different sources who
      each left out key basic information on how the Rails system fits together.
      In this case, nobody explained the actual flow from
      view->controller->Javascript view in a way that a first-timer like me can
      understand.

Facing these beasts, I girded my loins, holstered coffee and snacks, and
forged into the unkempt wilds of Rails information and emerged at last
victorious. So here for you, dear reader, are the spoils of my victory.

(and before you say it, I know most of this is pretty basic, and Rails 6 changed
a lot of this. I just want to document my success)

# HOW TO DO REMOTE FORMS, LINKS, AND OTHER JAVASCRIPT THINGS IN RAILS 5

1. First you make a form. I use ```form_with```, but you can do it however you
   like.

    - In Rails 5, all forms made with a form helper are remote **by default.**
      This means that every form you make will submit the params "as JS," which
      you will see on the server logs when you click the button. The page won't
      refresh, and you won't see any errors if something isn't right.
    - Make sure the form submits to the controller action you're trying to call.
      This can be anything, really, so long as you follow the ```respond_to```
      step below and create the *.js.erb file for whatever action you're using.
    - You can also use ```button_to``` if all you want is something to click on,
      with no input (more on that at the end). 

2. Write the respond_to block
  
    - This part is actually explained in a lot of places. In order to have the
      controller respond to anything other than an HTML request, you have to
      include a block like this:
    
      ```
      respond_to |format| do
        format.html {}
        format.js {}
      end
      ```
  
      Let's say you put this at the bottom of #index action of a controller.
      What this means, is that
      when an HTML query is received, the controller will do whatever you put in
      the {} after ```format.html```, and then generate the view from index.html.erb
      as normal.  Similarly, when a JS request is received, the controller will do
      everything above the ```respond_to block```, then do everything inside the
      {} after ```format.js```, then generate a view from **index.js.erb**.

3. Create a *.js.erb file, and stick all your Javascript in there

    - **Here's the key point:** index.js.erb isn't actually a different index
      view. It's just a regular javascript file, and you can use whatever JS you
      want to change the DOM however you want. However, because you can also use
      ERB, you have access to the full boat of controller instance variables *and*
      you can render partials, so you can select whatever part of the DOM you want
      to update with data from the controller as you so desire.
  
      There's actually quite a bit more going on to make these AJAX requests work,
      but Rails handles it all behind the scenes for you with the ```rails-ujs```
      gem, which is now a built-in part of Rails as of v5.

  
And that's basically it! It's confusing the first time you go through it, but
once you see where the different *.js.erb files go and how to call them, it
becomes pretty easy. For the experienced readers, I know this is all, like,
super basic, but at the time I was looking there wasn't a single place where all
these pieces were presented together. 

Here's that bit about ```button_to``` I mentioned earlier. The reason I wanted
remote forms, was for switching recipe measurement units from imperial to metric
without reloading the page. This meant making a call to the controller with
whatever units I was asking for in the params.

My first attempt was to use the ```link_to``` and stuffing query params into the
GET request. I thought it would be Better&#8482; to put the user's choice in the
URL bar as GET params, so they could bookmark their preferred version.

Turns out my original method for sorting that out was a pile of hot garbage. I
had to construct some truly outrageous param whitelist setups to get it to work
at all, and then one tiny change would goof it all up again. 

In the end, I replaced the link helpers with just a couple of divs styled to
look like buttons, and attached JS Event listeners in the
app/assets/javascripts/*.js file for that view. Another nice thing about
```rails-ujs``` is a convenient wrapper for submitting forms programatically
with JS: ```Rails.fire(form, 'submit')```, where 'form' is a reference to the
form element on the page you pick out with a query selector. That's the other
thing: That app/assets/javascripts folder is where you can make view-specific JS
files that will run when the page is first loaded - this is where you attach
Event listeners.

Oh, one more thing - speaking of Event listeners, if you're using Turbolinks,
you can't attach to the pageload event, because Turbolinks' whole thing is
skipping a full reload to save time. Instead, you have to attach to the
```turbolinks:load``` event, like this:

  ```
  document.addEventListener("turbolinks:load", function() {
    do_something_neat();
  })
  ```

---
Hopefully if you're a noob like I was, this will help you. I also certainly hope
that you will email me if I've made a mistake! If you're reading this and you 
think it needs more explanation or I'm missing some key part, please drop me a
line and I'll make it more complete!
