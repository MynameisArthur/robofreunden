import React,{Component} from 'react';
import './App.sass';
import 'tachyons';
//Components
import SearchBox from '../components/SearchBox.component';
import Scroll from '../components/Scroll.component';
import ErrorBoundary from '../components/ErrorBoundary.component';
import CardList from '../components/CardList.component';


class App extends Component {
  constructor()
  {
    super();
    this.state = {
      robots : [],
      searchfield: ''
    };
  }
  async componentDidMount()
  {

    const req = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await req.json();
    this.setState({robots: res});
  }
  onSearchChange = (e)=>{
    this.setState({searchfield: e.target.value});
  }
  render() {    
    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });    
    if(!robots.length)
    {
      return (<h1>Loading...</h1>);
    }
   
    return (
      <div className="tc">
          <h1 className="f1">RoboFreunden</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
    );
  }
}
 
export default App;
