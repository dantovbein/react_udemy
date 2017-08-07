# React Udemy

* Kill localhost conenction (Windows command line)
``` bash
netstat -ano | findstr :portNumber
taskkill /PID typeyourPIDhere /F
```
* Set up SASS in webpack
https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

* Start up
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

* Functional component
``` javascript
const SearchBar = () => {
  return <input />;
}
```

* Class component
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

* React & Redux
Redux represents the data model of your component. It's all included in a single object. React represents only theh views and its logic.
Redux -> Application level state
