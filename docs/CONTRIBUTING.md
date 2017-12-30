## Just a friendly reminder
### About modifying the core:
#####(`/_src/components`)
* Don't limit customization (as in, don't break what might already depend on it)
* but making the core more personalized is totally fine either in a fork or framework
* ...that's pretty much it

### For adding frameworks
#####(`/_src/frameworks`)
**The steps are**
* Copy `_blank-select`/Create your own folder
* Once inside your folder, name and structure things however you want
* Create your `Select` framework
* Make it the `default` export of the your main file
* Add it to the `/_src/frameworks/index.js `with PascalCase
* `npm run build`, if you haven't already

### Thanks for contributing!