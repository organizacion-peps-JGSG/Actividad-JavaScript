/**
 * Pruebas unitarias Ejercicio 14b. Arrays - Estadísticas de notas 
 * @author: José Gaspar Sánchez García.
 */

 const chai = require('chai');
 const mocha = require('mocha');  
 const assert = chai.assert;    // Using Assert style
 const expect = chai.expect;    // Using Expect style
 const should = chai.should();  // Using Should style
 
 const {calcularMaximo, calcularMinimo,calcularMedia, contarAprobados, contarSuspensos} = require('../js/ejercicio14b'); // Para poder referenciar adecuadamente

 describe('Test de pruebas del Ejercicio 14 B. Arrays - Estadisticas de notas ', () => {
    describe('Caso de prueba 1: calcularMaximo', () => {
        it('calcularMaximo([2 1 3 5 7 2.5 4 6]) --> 7', () => {
            const vector=[2,1,3,5,7,2.5,4,6];
            assert.isArray(vector);
            assert.equal(calcularMaximo(vector),7);
        });
    });
    // Caso prueba 2
    describe('Caso de prueba 2: calcularMinimo', () => {
        it('calcularMaximo([2 1 3 5 7 2.5 4 6]) --> 1', () => {
            const vector=[2,1,3,5,7,2.5,4,6];
            assert.isArray(vector);
            assert.equal(calcularMinimo(vector),1);
        });    
    });
    // Caso prueba 3
    describe('Caso de prueba 3: calcularMedia', () => {
        it('calcularMedia([2 1 3 5 7 2.5 4 6]) --> 3.8125', () => {
            const vector=[2,1,3,5,7,2.5,4,6];
            assert.isArray(vector);
            assert.equal(calcularMedia(vector),3.8125);
        });    
    });
    // Caso prueba 4
    describe('Caso de prueba 4: Aprobados y Suspensos', () => {
        it('contarAprobados([2 1 3 5 7 2.5 4 6]) --> 3', () => {
            const vector=[2,1,3,5,7,2.5,4,6];
            assert.isArray(vector);
            assert.equal(contarAprobados(vector),3);
        });
        it('contarSuspensos([2 1 3 5 7 2.5 4 6]) --> 5', () => {
            const vector=[2,1,3,5,7,2.5,4,6];
            assert.isArray(vector);
            assert.equal(contarSuspensos(vector),5);
        });    
    });
    // Caso prueba 5
    describe('Caso de prueba 5: Estadísticas', () => {
        const arr=new Array();
        it('contarAprobados([]) --> 0', () => {
            assert.isArray(arr);
            assert.equal(contarAprobados(arr),0);
        });
        it('contarSuspensos([]) --> 0', () => {
            assert.isArray(arr);
            assert.equal(contarSuspensos(arr),0);
        });
        it('calcularMedia([]) --> 0', () => {
            assert.equal(calcularMedia(arr),0);
        });
        it('calcularMinimo([]) --> 0', () => {
            assert.equal(calcularMinimo(arr),0);
        });
        it('calcularMaximo([]) --> 0', () => {
            assert.equal(calcularMaximo(arr),0);
        });    
    });
     // Caso prueba 6
     describe('Caso de prueba 6: Un solo elemento [5]', () => {
        const arr=[5];
        it('contarAprobados([5]) --> 1', () => {
            assert.isArray(arr);
            assert.equal(contarAprobados(arr),1);
        });
        it('contarSuspensos([5]) --> 0', () => {
            assert.equal(contarSuspensos(arr),0);
        });
        it('calcularMedia([5]) --> 5', () => {
            assert.equal(calcularMedia(arr),5);
        });
        it('calcularMinimo([5]) --> 5', () => {
            assert.equal(calcularMinimo(arr),5);
        });
        it('calcularMaximo([5]) --> 5', () => {
            assert.equal(calcularMaximo(arr),5);
        });    
    });

    // Caso prueba 7
    describe('Caso de prueba 7: Un solo elemento repetido', () => {
        const arr=new Array();
        const n=parseInt(Math.random()*10 + 1);
        for(let i=0;i<n;i++)
            arr.push(n);
        it('contarAprobados x N --> '+n, () => {
            assert.isArray(arr);
            if(n>=5)
                assert.equal(contarAprobados(arr),n);
            else
                assert.equal(contarAprobados(arr),0);
        });
        it('contarSuspensos x N --> '+n, () => {
            if(n<5)
                assert.equal(contarSuspensos(arr),n);
            else
                assert.equal(contarSuspensos(arr),0);
        });
        it('calcularMedia x N --> '+n, () => {
            assert.equal(calcularMedia(arr),n);
        });
        it('calcularMinimo x N --> '+n, () => {
            assert.equal(calcularMinimo(arr),n);
        });
        it('calcularMaximo x N --> '+n, () => {
            assert.equal(calcularMaximo(arr),n);
        });    
    });

     // Caso prueba 8
     describe('Caso de prueba 8: [8 3 5 3]', () => {
        const arr=[8,3,5,3];
        
        it('contarAprobados([8 3 5 3]) --> 2', () => {
            assert.isArray(arr);
            assert.equal(contarAprobados(arr),2);
        });
        it('contarSuspensos([8 3 5 3]) --> 2', () => {
            assert.equal(contarSuspensos(arr),2);
        });
        it('calcularMedia [8 3 5 3] --> 4.75', () => {
            assert.equal(calcularMedia(arr),4.75);
        });
        it('calcularMinimo [8 3 5 3] --> 3', () => {
            assert.equal(calcularMinimo(arr),3);
        });
        it('calcularMaximo [8 3 5 3] --> 8', () => {
            assert.equal(calcularMaximo(arr),8);
        });    
    });
 });