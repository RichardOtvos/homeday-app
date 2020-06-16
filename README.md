# HomedayApp
The frontend test for Homeday written in Angular2.

## Running the app

You will need to have git and node(I've used the latest stable version v14.4.0, but it should work 
with any recent version) installed on your computer.
Simply clone the project and run `npm ci` in the working directory to install your dependencies.

You can run the project by typing `npm start`.

## Running  tests

You can run the tests by running `npm test`.

## Technical Discussion
Here I'm going to detail my thought process a bit, so you can see why I made the choices
I did, what future improvements I'd make and other considerations.

### One main component vs multiple pages
I was debating having a main form component (the url stays the same) vs having each 
component as a separate route (each form page has a different url). I think this is
mainly dictated by product requirements. I went the first route, 
however I feel like the way I designed the components make it easy to switch between these
two ways easily.

### Angular Service vs State Manager
I'm using a service to manage the state of the form, throughout the application.I think this is fine for simpler and small to medium-sized apps like this
If this was a bigger app (or if it was known beforehand that it's going to grow really fast),
I would consider using a proper state manager like Redux (with an addon like ngRx). Personally
I feel like there is a real size and complexity overhead in using a state manger, just because
they're cool(which they are), but in Angular the services are singletons, and can go a long way.

### Tests
I stated writing the code using TDD, but because of reasons unrelated to the test, I
had less time for it than I thought I will have. The service and the shell component
( `application-form-component` ) have tests though, and I don't really do anything 
different in the rest of the app, so hopefully that shows I can (and usually do) write
tests.

### Template driven vs Reactive Forms
I've used template drive forms here, because I thought using reactive forms might be
a overkill (and as I mentioned above, I was in a bit of a time crunch). If the form
needs more robust validation, or evolves to need a lot more fields, I'd definitely switch
 to them.
 
### Validations
It was not said anywhere in the tasks, but I've added some validations, because I think 
they make sense from a product standpoint.

### Submit action
On the review page on pressing the submit button, I write the data I'd send to the server
to the consol.  This submit action comes from the application shell, and passed in to the
component, which works just fine. In a real app that actually sends the data, I'd  move the
saving code and the http request to the `formDataService`, because I think it's more in line
of the Single responsibilty principle, if the service handles everything form data related.


### Angular Material
Haven't used Angular Material in a long time, because we have our own custom design library at
work, but I wanted the app to look good, without spending a lot of time on it, It was really easy
to use and to write tests with.

### Progress bar vs Stepper
Material has a stepper component too, that can be used for multipage forms. I could have
gone either way, but I liked the look of the progress bar better. On hindsight a stepper
component might have been more correct semantically, but the form is pretty straightforward
so I don't think it matters.

### Minimal responsivness
I've made the components, so they resize themselves if the window gets smaller, but 
I didn't go crazy with having a separate design for small screens, or like with proper
breakpoints  


## Future improvement ideas

### Translations and i18n
Adding this ASAP to a proejct is very important in my opinion, the later this is added
the more painful wiring in the texts will be. Unless you only target a domestic markets 
i18n is very important (and honestly even then, like I'm also browsing the english version
of the Homeday website). I didn't have time for it for this exercise.

### Accessibility
It is socially responsible to add a11y features, so people with disabilities can use the
site. It's also represent a larger target audience than most people think. I've been developing
mostly internal tools the  last 3 years, so I'm going to be honest, I'm not the most up-topdate
on modern a11y techniques, but it's important nonetheless.

### More tests
Besides finishing up the unit and integration tests, I think covering at least one or two
happy paths, or important custmoer journeys with end to end tests really gives you a good value
for the time invested.

### Server-side rendering
I don't think it makes a lot of sense here, but could be useful for better speed, or if
you need SEO.

### Analytics
Doesn't strictly belong to dev improvements, but as this is a form that we presumably
want the user to send to us, it's really useful if we send us data and analytics about user
behaviour, so we can see possible bottlenecks in the flow come up with better ways to maximize
user engagement / conversion rate.

### More animations
I've only added minimal animations (basically  only to the progress bar), but  animating
form page transitions could look cool.
