//Component syntax my solution---------------------------------------------------------------------------------------------------------------
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            text: ''
        };
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            if(prevState.text !== ''){
                return {text: prevState.text = ''}
            }
            return {text: prevState.text = <p>Here are some details</p>}
        });
    }

    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}>{this.state.text === '' ? 'Show details' : 'Hide details'}</button>
            {
                this.state.text
            }
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//My solution

// let info = '';

// const showDetails = () => {
//     if (info === '') {
//         info = <p>Some details showing</p>;
//     }else{
//         info = '';
//     }
//    render() 
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const templateAppToggle = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{info === '' ? 'Show details' : 'Hide details'}</button>
//             {
//                 info
//             }
//         </div>
//     );
    
//     ReactDOM.render(templateAppToggle, appRoot);
// }
// render();



//React componen syntax solution in the video-------------------------------------------------------------------------------------------------
// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
//         this.state = {
//             visibility: false
//         };  
//     }

//     handleVisibilityToggle() {
//         this.setState((prevState) => {
//             return {
//                 visibility: !prevState.visibility
//             };
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <button onClick={this.handleVisibilityToggle}>
//                 {this.state.visibility ? 'Hide Details' : 'Show Details'}
//                 </button>
               
//                 {this.state.visibility && (
//                     <p>These are some details</p>
//                 )}
                
//             </div>
//         );
//     }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//The solution on the video
// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. This are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();