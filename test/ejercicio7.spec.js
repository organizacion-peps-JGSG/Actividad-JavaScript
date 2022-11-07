/**
 * Pruebas unitarias Ejercicio 7. Series de Fibonacci
 * @author: José Gaspar Sánchez García.
 */

const chai = require('chai');
const mocha = require('mocha');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

const {fibonacci} = require('../js/ejercicio7'); // Para poder referenciar adecuadamente

describe('Test de prueba Ejercicio 7. Series de Fibonacci;', () => {
    describe('Caso de prueba 1: fibonacci(n)', () => {
        it('fibonacci(5) es un Array', () => {
            const v=fibonacci(5);
            assert.isArray(v, "El resultado debe ser un array");
        });

        it('fibonacci(5) --> Longitud = 5', () => {
            const v=fibonacci(5);
            assert.lengthOf(v, 5, "Longitud "+v.length);
        });

        it('fibonacci(5)', () => {
            const v=fibonacci(5);
            const sal=[1,1,2,3,5];
            assert.isArray(v, "El resultado debe ser un array");
            for(let i=0;i<v.length;i++)
                assert.equal(v[i], sal[i], "Elemento "+i+" incorrecto.");
        });

        it('fibonacci(8) --> Longitud = 8', () => {
            const v=fibonacci(8);
            assert.lengthOf(v, 8, "Longitud "+v.length);
        });

        it('fibonacci(8)', () => {
            const v=fibonacci(8);
            const sal=[1,1,2,3,5,8,13,21];
            assert.isArray(v, "El resultado debe ser un array");
            for(let i=0;i<v.length;i++)
                assert.equal(v[i], sal[i], "Elemento "+i+" incorrecto.");
        });
    });

    // Caso de prueba 2
    describe('Caso de prueba 2: fibonacci(0)', () => {
        it('fibonacci(0) es un Array', () => {
            const v=fibonacci(0);
            assert.isArray(v, "El resultado debe ser un array");
        });

        it('fibonacci(0) --> Longitud = 0', () => {
            const v=fibonacci(0);
            assert.lengthOf(v, 0, "Longitud "+v.length);
        });

        it('fibonacci(0)', () => {
            const v=fibonacci(0);
            const sal=[];
            assert.isArray(v, "El resultado debe ser un array");
            for(let i=0;i<v.length;i++)
                assert.equal(v[i], sal[i], "Elemento "+i+" incorrecto.");
        });

        it('fibonacci(0) --> Longitud = 0', () => {
            const v=fibonacci(0);
            assert.lengthOf(v, 0, "Longitud "+v.length);
        });
    });

    // Caso de prueba 3
    describe('Caso de prueba 3: fibonacci(1)', () => {
        it('fibonacci(1) es un Array', () => {
            const v=fibonacci(1);
            assert.isArray(v, "fibonacci(1) es un Array.");
        });
        
        it('fibonacci(1) --> Longitud = 1', () => {
            const v=fibonacci(1);
            assert.lengthOf(v, 1, "Longitud "+v.length);
        });

        it('fibonacci(1) --> [1]', () => {
            const v=fibonacci(1);
            const sal=[1];
            assert.isArray(v, "El resultado debe ser un array");
            for(let i=0;i<v.length;i++)
                assert.equal(v[i], sal[i], "Elemento "+i+" incorrecto.");
        });

    });

    // Caso de prueba 4
    describe('Caso de prueba 4: fibonacci(2)', () => {
        it('fibonacci(2) es un Array', () => {
            const v=fibonacci(2);
            assert.isArray(v, "fibonacci(2) es un Array.");
        });
        
        it('fibonacci(2) --> Longitud = 2', () => {
            const v=fibonacci(2);
            assert.lengthOf(v, 2, "Longitud "+v.length);
        });

        it('fibonacci(2) --> [1 1]', () => {
            const v=fibonacci(2);
            const sal=[1, 1];
            assert.isArray(v, "El resultado debe ser un array");
            for(let i=0;i<v.length;i++)
                assert.equal(v[i], sal[i], "Elemento "+i+" incorrecto.");
        });

    });

    // Caso de prueba 5
    describe('Caso de prueba 5: fibonacci(-6)', () => {
        it('fibonacci(-6) es un Array', () => {
            const v=fibonacci(-6);
            assert.isArray(v, "fibonacci(-6) es un Array.");
        });
        
        it('fibonacci(-6) --> Longitud = 0', () => {
            const v=fibonacci(-6);
            assert.lengthOf(v, 0, "Longitud "+v.length);
        });

        it('fibonacci(-6) --> []', () => {
            const v=fibonacci(-6);
            const sal=[];
            assert.isArray(v, "El resultado debe ser un array");
            for(let i=0;i<v.length;i++)
                assert.equal(v[i], sal[i], "Elemento "+i+" incorrecto.");
        });

    });
});
