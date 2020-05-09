console.log('app.js is running');

//JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands os a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const removeOptions = () => {
    app.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <button disabled={app.options.length === 0}  onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
           
            <ol>
               {
                   app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol>
        
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
        );

     ReactDOM.render(template, appRoot);
};

renderIndecisionApp();