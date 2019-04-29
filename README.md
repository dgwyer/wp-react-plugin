# wp-react-plugin

Develop React apps easily inside of WordPress with this plugin. Uses [React Hot Loader](https://github.com/gaearon/react-hot-loader) internally to update changes in real time while also preserving React state.

<p align="center"><image width="500" src="https://user-images.githubusercontent.com/1482075/56888086-1ea9cc00-6a6b-11e9-86cc-b08ea7fe0199.gif" title="Click to enlarge" /></p>

## Installation

Inside `/wp-content/plugins/`

```bash
git clone https://github.com/dgwyer/wp-react-plugin.git
cd wp-react-plugin
npm install
npm run dev
```

Activate the plugin.

This plugin supports using React on the front end and on a specific admin page (the plugin options page).

### WordPress Admin

Go to Settings > WP React Plugin in the WordPress admin to access the plugin options page. Here you'll see a very simple React app as a placeholder for your own code.

### Front End

The React app is a stand alone app so can be loaded on the front end too! Simply add an empty element to the new WordPress (5.0+) editor with CSS class name `wp-react-plugin`. Save the page and view on the front end to display the React app.

## Developing Your Own React Apps

By running `npm run dev` your files will be watched by webpack for changes in real time. As soon as a change is made to a JavaScript (or JSX) file, and saved, the React app is automatically updated in the browser window. And because RHL is used then React state is preserved too!

Note: Running `npm run dev` deletes the `/dist` folder so don't forget to run `npm run prod` to create the final versions of your files. Otherwise your React app won't be available outside of `npm run dev`.

Also, try editing App.scss to see styles updated almost instantly.

## To Do (link these to issues)

- Get https to work. (issue #5)
- Find a way to enqueue development or production scripts more effectively. (issue #6)

## Contributions Welcome!

Please remember that this project is in it's very early stages of development.

Any contribution is most welcome so if you see something that could be improved then please let me know by reporting an issue or submitting a pull request. You have my thanks in advance. :relaxed:
