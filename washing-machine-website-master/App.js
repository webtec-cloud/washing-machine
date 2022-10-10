import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (isLoaded) {
      return <div>loading</div>;
    } else {
      return (
        <div className="App">
          {
            items.map(item => (
              <li key={item.id}>
                Title: {item.title} | ProductId:{item.product.id}
              </li>
            ))}
        </div>
      );
    }
  }
}





export default App;
