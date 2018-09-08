
/**
 * 切入
 * @param {Object} obj 切入对象 
 * @param {String} prop 函数名 
 * @param {function(...Object)} before
 * @param {function(...Object)} after
 */
exports.aop = function(obj, prop, before, after) {
    var fn = obj[prop];
    if (typeof fn === 'function') {
        obj[prop] = function() {            
            before && before.apply(this, arguments);
            var rt = fn.apply(this, arguments),
                arr = Array.prototype.slice.call(arguments);
                
            arr.push(rt);

            after && after.apply(this, arr);
            return rt;
        };
    }
};

/**
 * before切入
 * @param {Object} obj 切入对象 
 * @param {String} prop 函数名 
 * @param {function(...Object)} before
 */
exports.before = function(obj, prop, before) {
    return exports.aop(obj, prop, before, null);
};

/**
 * after切入
 * @param {Object} obj 切入对象 
 * @param {String} prop 函数名 
 * @param {function(...Object)} after
 */
exports.after = function(obj, prop, after) {
    return exports.aop(obj, prop, null, after);
};

