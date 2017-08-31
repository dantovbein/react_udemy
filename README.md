# React Udemy course

Kill localhost conenction (Windows command line)
``` bash
netstat -ano | findstr :portNumber
taskkill /PID typeyourPIDhere /F
```
Set up SASS in webpack
https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

#### Start up
``` bash
$ npm init && touch webpack.config.js && touch .babelrc
$ mkdir sass && mkdir src && cd src && touch index.js && mkdir components && mkdir reducers && cd reducers && touch index.js && cd ..
```

  JSX javascript code that produces html. Make our components more legible.
  React is made up by a different components. It´s a function that returns an HTML
  Controlled components
  Functional component to Class component
  If you implement the state into a component it should be a class as mandatory
  When in object the key and the value has the same name i.e. { val: val }, you can reduce to { val } [: syntactic sugar :]

#### Functional component
``` javascript
const MyComponent = () => {
  return <input />;
}
```

#### Class component
``` javascript
export default class MyComponent extends Component {
  render() {
    return(
      <div></div>
    );
  }
}
```

#### Controlled Component

``` javascript
<input
  value={ this.state.term }
  onChange={ evt => this.setState({ term: evt.target.value }) } />
```

*All components returns an HTML*

## React and Redux
Redux represents the data model of your component. It's all included in a single object. React represents only theh views and its logic.
Redux -> Application level state

### Actions
Everything you do in your application it´s an action. Click on sth, submit, bla bla

Any action it´s a function.
 
Action function = Action creator. In other words, an action creator is a function that returns an action

```js
export const myAction = (params) => {
  return {
    action,
    payload
  }
}
```
When any action occurs, this action inmediatlly will to all reducers.

*A container it´s a component that it´s connected to redux. It has these methods `mapStateToProps` and `mapDispatchToProps`*

`mapStateToProps` Gives a little piece of state

When an action is triggered this will be taken by all reducers, and each can change whatever of this.

Any action return a plain javascript `Object`. It´s always returning:

```javascript 1.6
{
  type: "TYPE_OF_ACTION",
  payload: data
}
```

`type`: Required `payload`: Not required


### Reducers
A reducer it´s a function that **returns or produce** a piece of the application state.

Many pieces of state, so many reducers!

We should connect react to redux

| Redux | < > (bridge:`react-redux`) | < > | React | -> Two separate projects
 
|-------------------- Application -----------------|


Through reducers, `state` argument is not application state, this is the previous state

```javascript 1.6
let state = {
  counter: 0
}

return {
  counter: counter+1 // Equal to return 1,2,3,4,5,....
}
```

**Redux does not allows us to return an `undefined` value. Always set as `null`**

### Containers (Smart Component)
A container is a react component that it´s connected to Redux. The care about a particular piece of state.
Only the parent should be connected to redux

`mapStateToProps`
Take the whole application state as an argument.
Whethever is returned will show up as props inside of a container
Will be available through `this.props`

```javascript 1.6
function mapStateToProps(state) {
  return {
    books: state.books
  };
}
```
Lo accedemos de esta manera
```javascript 1.6
console.log(this.props.books);
```

**Whenever the application state changes, the container will be re-rendered as well**

**Whenever the application state changes, `this.props` is modified**

`mapDispatchToProps`
Anything returned from this function will end up as props on the container

```javascript 1.6
function mapDispatchToProps(dispatch) {
  return bindActionCreators({doSth}, dispatch);
}
```
Whenever we call sth in our container, we will dispach an action 

So, `doSth` will be available as a `props`

**Every time you create a new component, you should decide previously if it´s a `component` or a `container`**


### Controlled field
Is a form element where the value of the input is set by the state of our component

## React router

The `router` is listening every time if the location has change (`history`), if it´s true, then call to `react` and ask for render a particular component

### BrowserRouter
Interacts everytime with the `history` library based on a change and decide what to do

### Route
Provides the customization or configuration if the url changes (`react-router`). _I wanna show this component or another_ depends on the new `route`
    
```javascript 1.6
<Router path="/" component={} />
```

### Lifecycle methods
Functions that are calling automatically by `react`

`componentDidMount()` Automatically call by react after this component has shown upside the DOM
`componentWillMount()` Automatically call by react before this component has shown upside the DOM

### Switch

Most specific routes at the top of the list

```javascript 1.6
<Switch>
  <Router path="/post/new" component={} />
  <Router path="/" component={} />
</Switch>
```

### Link
It´s something that the user can clock and navigate around different pages into react app

```javascript 1.6
<Link to="/">Button!</Link>
```

## Redux Form

Redux form allow us to work with forms in any react application.

Any redux-form is her own reducer which is combined in the index reducers. All forms are connected through.

```javascript 1.6
export default reduxForm({
  form: "unique-id"
})(MyForm);
```

It´s equal to `connect`. The ability to communicate to the form-reducer

`handleSubmit` It´s a functions that comes from redux-form for making a previous validation

### Field`
A field only interacts with Redux Form

```javascript 1.6
<Field
  name="",
  component={}
/>
```
`name` What piece of state
`component` It´s a functions that returns a component  

### Form

There are 3 states:

`pristine`: When no input has been touched or selected. This is the first state
`touch`: When the user has been touched or selected any input. Does some work on the field.
`invalid`: When there is an error
