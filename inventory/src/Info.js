import React from "react";

class Info extends React.Component {
    render(){
        const title = "Welcome"
        const showTitle = true;
  
        if (showTitle){
          return (
            <div>
              <h1>{title}</h1>
              <p>Manage your stuff</p>
            </div>
          );
        } else {
          return <p>empty</p>
        } 
      }
    }

export default Info;