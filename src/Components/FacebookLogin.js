import React, { Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './FacebookLogin.css';
class FacebookLoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            useID:'',
            name:'',
            email:'',
            picture:''

        }
    }
    responseFacebook=(response)=>{
        this.setState({
            isLoggedIn:true,
            useID:response.useID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })
        console.log(response);
    }
    componentClicked=()=>{
        console.log("clicked")
    }
     render(){
         let fbContent;
         if(this.state.isLoggedIn){
                 fbContent=(
                     <div className="User-profile">
                     <img src={this.state.picture}alt={this.state.name}>
                     </img>
                     <div  className="User-name">
                     {this.state.name}
                     {this.state.email}
                     </div>
                    </div>
                 )
         }else{
             fbContent=(
                <FacebookLogin
                appId="1091503604385940"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
             )
         }

         return(
             <div>
             {fbContent}
             </div>
         )
     }
}
export default FacebookLoginComponent;
