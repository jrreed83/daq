Array.prototype.downSample = function(n) {
    const out = [];
    for (let i=0; i< this.length; i++) {
        if (i % n === 0) {
            out.push(this[i]);
        }
    }
    return out;
};