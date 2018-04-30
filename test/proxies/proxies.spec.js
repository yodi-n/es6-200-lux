import 'babel-polyfill';
import Assert from 'assert';
import { trap } from '../../exercises/proxies/proxies';

// This file must not be modified => thanks for doing theses exercises correctly and seriously ;)

describe('Proxies ES6 comprehension', () => {

  it('should return the length of array == 2', () => {
    let pseudos = [];
    let pseudosProxy = new Proxy(pseudos, trap);
    pseudosProxy.push('Nicolas', 'SFEIR', 'Nicolas');
    Assert.deepStrictEqual(pseudosProxy.length, 2);
    Assert.deepStrictEqual(pseudos.length, 2);
  });

  it('should return nicolas instead of Nicolas', () => {
    let pseudos = [];
    let pseudoProxies = new Proxy(pseudos, trap);
    pseudoProxies.push('Nicolas');
    Assert.strictEqual(pseudoProxies[0], 'nicolas');
  });

  it('should return string without special character', () => {
    let pseudos = [];
    let pseudoProxies = new Proxy(pseudos, trap);
    pseudoProxies.push('iMa_Ro%%oR_P3wn€R');
    Assert.strictEqual(pseudoProxies[0], 'ima_roor_p3wnr');
  });
});