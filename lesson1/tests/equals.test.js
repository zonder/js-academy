var equals = require("../equals.js");

function ok(expr, msg) {
    if (!expr) throw new Error(msg);
}

suite('equals');

test('compare numbers', function() {
    ok(equals(1,1));
    ok(equals(0,0));
    ok(equals(-0,+0));
    ok(!equals(-1,1));
});

test('compare strings', function() {
    ok(equals('hello', 'hello'));
    ok(!equals('hello', 'hello1'));
});

test('compare string and digit', function() {
    ok(!equals('hello', 5));
});

test('compare empty objects', function() {
    ok(equals({}, {}));
    ok(equals([], []));
    ok(equals(["a","b","c"], ["a","b","c"]));
    ok(equals(null, null));
    ok(equals(undefined, undefined));
    ok(equals({a:"1", b:5,x:[1,2]}, {a:"1", b:5, x:[1,2]}));
    ok(equals({a:"1", b:{x:1}}, {a:"1", b:{x:1}}));
    ok(!equals(null, 1));
    ok(!equals({a:"1", b:5}, {a:"1", b:7}));
    ok(!equals({a:"11", b:5}, {a:"1", b:7}));
    ok(!equals({a:"1", c:{}}, {a:"1", b:7}));
});