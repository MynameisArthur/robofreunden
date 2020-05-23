import React,{Component} from 'react';
import './App.sass';
import 'tachyons';
//Components
import SearchBox from '../components/SearchBox.component';
import Scroll from '../components/Scroll.component';
import ErrorBoundary from '../components/ErrorBoundary.component';
import CardList from '../components/CardList.component';

import {setSearchField,requestRobots} from '../actions';
import {connect} from 'react-redux';
import Header from '../components/Header';

class App extends Component {  
  componentDidMount()
  {
    this.props.onRequestRobots();
    document.title = process.env.REACT_APP_PAGE_TITLE_ONE;        
  }  
  render() {
    const {searchField,onSearchChange, robots,isPending} = this.props;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });    
    if(isPending)
    {
      return (<h1>LOADING...</h1>);
    }   
    return (
      <div className="tc">
          <Header />   
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>          
        </div>
    );
  }
}
 
const mapStateToProps = (state)=>({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});
const mapDispatchToProps = (dispatch)=>({
  onSearchChange: e=>dispatch(setSearchField(e.target.value)),
  onRequestRobots: ()=> dispatch(requestRobots())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
