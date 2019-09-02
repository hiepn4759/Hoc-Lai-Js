var math = {
    add: function(a,b) {
        return a + b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    sum: function(arr) {
        var s = 0;
        for(var i = 0 ; i < arr.length; i ++){
            s += arr[i];
        }
        return s;
    }
}
module.exports = math;