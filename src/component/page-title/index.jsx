import React from 'react';




class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    conponentWillMount(){
        document.title = this.props.title + "-HAPPY MMAL"
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                   <h1 className="head-wrapper">{this.props.title}</h1>
                   {this.props.children}
                </div>
            </div>
           
        );
    }
}
export default PageTitle;