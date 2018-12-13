# wp-react-plugin

Develop React apps easily inside of WordPress with this plugin. Uses [React Hot Loader](https://github.com/gaearon/react-hot-loader) to update changes in real time while also preserving React state.

## Installation

Inside `/wp-content/plugins/`:

```bash
git clone https://github.com/dgwyer/wp-react-plugin.git
cd wp-react-plugin
npm run dev
```

Activate the plugin.

This plugin supports using React on the front end and on a specific admin page (the plugin options page).

### WordPress Admin

Go to Settings > WP React Plugin in the WordPress admin to access the plugin options page. Here you'll see a very simple React app as a placeholder for your own code.

### Front End

...

## Developing Your Own React Apps

The whole point of this plugin is to help you get started writing your own React app inside WordPress. To do this you'll want to watch for changes to files and have the React code compiled into standard JavaScript. This plugin takes care of all that for you.

Inside the plugin root folder:

```bash
npm run dev
```

And try changing the React code. If you have the browser window open at the same time you'll see your changes updated automatically as soon as your edits are saved. Even better, React state is preserved too!

Note: Running `npm run dev` deletes the `/dist` folder so don't forget to run `npm run prod` to create the final versions of your files. Otherwise your React app won't be available outside of `npm run dev`.

Also, try editing App.scss to see styles updated almost instantly.

## To Do (link these to issues)

- Get https to work.
- Find a way to enqueue development or production scripts more effectively.

## Post an Issue or Pull Request

Any contribution to this project is most welcome so if you see something that could be improved then please let me know via reporting an issue or submitting a pull request. You have my thanks in advance. :)
