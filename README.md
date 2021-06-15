## Steps I took
1. yarn
2. yarn start
3. added to .eslintrc.js 
```js
rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
```
4. yarn start - it works
5. Deleted some Views subfolders and their corresponding routes in routes.js
6. It is working - next step is for me to learn material ui components such as Grid and Card

### 7. Removed prettier
removed from `package.json` dev dependencies:  
```js
    "gulp": "4.0.2",
    "gulp-append-prepend": "1.0.9",
    "prettier": "2.2.1"
```
removed from `eslintrc.js` dev dependencies:
```js
    "eslint-config-prettier": "8.3.0",
    "eslint-plugin-prettier": "3.4.0",
```
```
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  
};

```
removed yarn.lock
delete node_modules
yarn // to

## Next Steps
- [ ] Create a new page for CTSP and see if it works
- [ ] Create a button to collapse LeftSideBar
- [ ] Learn Material UI GRID. So I can set layout for my own site. https://material-ui.com/components/grid/
- [ ] Learn Material useStyles. How does this work as opposed to CSS? https://material-ui.com/styles/basics/
- [ ] Learn Material Cards
- [ ] Add in airbnb date picker 
- [ ] Understand how this guy does routing and layout
- [ ] ReactBootstrap https://react-bootstrap.github.io/getting-started/why-react-bootstrap/
- [ ] Material UI is all React! https://material-ui.com/ 

## Creating a New Page
1. Add in the route to route.js
2. Create a new component under views folder. usestyles and cards 

------------------------------

### MaterialUI Theming
https://material-ui.com/customization/theming/ using useContext and Provider


## Useful Links
1. [Documentation](https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial)
2. [Creative Time Youtube tutorials](<https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>)
3. [Github](https://github.com/creativetimofficial/material-dashboard-react/)


## Useful for later
This 'Dashboard' side nav is awesome:
https://material-ui.com/getting-started/templates/
https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
https://material-ui.com/getting-started/templates/dashboard/

## DESIGN STEPS using Material UI
1. SETUP GRID
2. SETUP ROUTER
3. Need Material UI Navbar - [Drawers](https://material-ui.com/components/drawers/)
4. Date Filter - can use the airBnB one or this MUI [Date / Time] (https://material-ui.com/components/pickers/)
5. CHARTJS