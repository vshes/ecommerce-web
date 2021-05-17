import React from 'react';

class Test extends React.Component{

    constructor() {
        super();
        console.log('constructor !')
    }

    componentDidMount() {
        console.log('component mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         console.log('updated componet called')
    }

    componentWillUnmount() {
        console.log('Unmounted !!')
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    render(){
        console.log('rendered');
        return(<div><h1>Test</h1></div>)
    }

}

export default Test;
