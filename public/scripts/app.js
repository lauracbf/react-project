'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Component syntax my solution---------------------------------------------------------------------------------------------------------------
var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleVisibilityToggle = _this.handleVisibilityToggle.bind(_this);
        _this.state = {
            text: ''
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleVisibilityToggle',
        value: function handleVisibilityToggle() {
            this.setState(function (prevState) {
                if (prevState.text !== '') {
                    return { text: prevState.text = '' };
                }
                return { text: prevState.text = React.createElement(
                        'p',
                        null,
                        'Here are some details'
                    ) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleVisibilityToggle },
                    this.state.text === '' ? 'Show details' : 'Hide details'
                ),
                this.state.text
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

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
