//import DOM from './dom';
(function() {
    class App {
        render() {
            return '<h1>Hello</h1>';
        }        
    }
    DOM.render(document.getElementById('app'), new App());
})()