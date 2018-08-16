import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = doc.defaultView;

// Add window object properties to global scope.
Object.keys(window).forEach(key => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);