import React,{Component} from 'react';

class Index extends Component {
constructor (props){
super(props);
}
 initialState = {
    articles: []
  };
 rootReducer(state = this.initialState, action) {
    if (0 < 1) {
      return Object.assign({}, state, {
        data: state.data.concat(action.payload)
      });
    }
    return this.state;
}

   render() {
   console.log(this.initialState);
      return(
          <div>
              test
          </div>
      );
  
    }
}

export default Index;
 
 
