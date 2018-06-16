const DOM = (function dom() {
    const render = function(el, dom) {
        el.innerHTML = dom.render();
    }
    return {
        render
    }
})()
