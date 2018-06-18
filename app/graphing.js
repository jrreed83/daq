const graphing = (function() {
    function linearMapping() {

        let _domain = [];
        let _range  = [];
    
        function scale(x) {
            const [x0, x1] = _domain;
            const [y0, y1] = _range;
            const m = (y1 - y0) / (x1 - x0);
            const b = y0 - m*x0;
            const y = m * x + b;
            return y;
        }
    
        scale.domain = function(domain) {
            _domain = domain;
            return scale;
        };
    
        scale.range = function(range) {
            _range = range;
            return scale;
        }
    
        return scale;
    }

    return {
        linearMapping
    }
})()




