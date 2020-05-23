import React,{Component, lazy, Suspense} from 'react';
import Page1 from './splitta/Page1';
import AsyncComponent from './splitta/AsyncComponent';


const Page2Lazy = lazy(()=>import('./splitta/Page2'));
const Page3Lazy = lazy(()=>import('./splitta/Page3'));

class Split extends Component {
    constructor()
    {
        super();
        this.state = {
            route: 'page1',
            component: null
        };
    }
    componentDidMount()
    {
        document.title = process.env.REACT_APP_PAGE_TITLE_TWO;
    }
    onRouteChange = (route)=>{       
        this.setState({route});
    }
    render()
    {
        const {route} = this.state;
        if(route==='page1')
        {
            return (<Page1 onRouteChange={this.onRouteChange}/>);
        }
        else if(route==='page2')
        {
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <Page2Lazy onRouteChange={this.onRouteChange}/>           
                </Suspense>
            );
        }       
        else if(route==='page3')
        {
           return(
            <Suspense fallback={<div>Loading...</div>}>
                <Page3Lazy onRouteChange={this.onRouteChange}/>           
            </Suspense>
           );
        }
    }
}

export default Split
