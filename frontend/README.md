# Mithya Vite TS, Tailwind, Easy-peasy, Sass boilerplate

This boilerplate sets up a basic project using Vite TS, Tailwind, Easy-peasy and Sass.

To use this, first clone the repo using degit like so: `npx degit mithya-team/vite-ts-template <my-awesome-project>`

Then open a terminal and cd into the folder.

Run `yarn && yarn dev` to install the dependencies and start the dev server.

🎊 That's it 🎊. Start building your project.

## Templates in this boilerplate

This project has templates for Component, Model and Store set up. You may add as many as you want.

To use these templates, run the corresponding command. You can either answer the prompts or pass in arguments using the `--` notation.

| Template  | Command        | Args                                          |
| --------- | -------------- | --------------------------------------------- |
| Component | `yarn g:comp`  | name                                          |
| Model     | `yarn g:model` | name, api, needsParser(y/n), needsUtils (y/n) |
| Store     | `yarn g:store` | name                                          |

For example to create a model, you can run `yarn g:model --name model_name --needsParser y` and it will prompt you only for the api endpoint and for whether you need a utils file with this model.

## Other features

This boilerplate also has setup for storybook and pwa on different branches.
To use those branches as the base for your new project run `npx degit mithya-team/vite-ts-template#<branch-name> <my-awesome-project>`. If you get an error that says `zsh: no matches found: mithya-team/vite-ts-template#<branch-name>`, run this: `npx degit "mithya-team/vite-ts-template#<branch-name>" <my-awesome-project>`.
Following branches are available.

| branch        | description                   |
| ------------- | ----------------------------- |
| storybook     | vite app with storybook       |
| pwa           | vite app with pwa config      |
| pwa-storybook | vite app with pwa & storybook |
