import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Coaco</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
