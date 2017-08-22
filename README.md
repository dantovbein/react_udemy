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

  jsx javascript code that produces html. Make our components mor legible.
  React is made up by a different components. It´s a function that returns an HTML
  Controlled components
  Functional component to Class component
  If you implement the state into a component it should be a class as mandatory
  When in object the key and the value has the same name i.e. { val: val }, you can reduce to { val } [: syntactic sugar :]

#### Functional component
``` javascript
const SearchBar = () => {
  return <input />;
}
```

#### Class component
``` javascript
export class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div></div>
    );
  }
}
```

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
A reducer it´s a function that returns a piece of the application state.

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