/**
 * Pruebas unitarias Ejercicio 5. Funciones
 * @author: José Gaspar Sánchez García.
 */

const chai = require('chai');
const mocha = require('mocha');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

const {esMayorEdad, obtenerCalificacion} = require('../js/ejercicio5'); // Para poder referenciar adecuadamente


describe('Test de pruebas Ejercicio 5', () => {
    describe('Caso de prueba 1: Es Mayor de edad', () => {
        it('esMayorEdad(0)', () => {
            assert.isFalse(esMayorEdad(0), "Cero años es menor de edad");
        });

        it('esMayorEdad(9)', () => {
            assert.isFalse(esMayorEdad(9), "Nueve años es menor de edad");
        });

        it('esMayorEdad(18)', () => {
            assert.isTrue(esMayorEdad(18), "Dieciocho años es mayor de edad");
        });

        it('esMayorEdad(32)', () => {
            assert.isTrue(esMayorEdad(32), "Treinta y dos años es mayor de edad");
        });
    });
    describe('Caso de prueba 2: Obtener calificación correspondiente a nota', () => {
        it('obtenerCalificación(-1)', () => {
            assert.equal(obtenerCalificacion(-1),"Incorrecta");
        });
        it('obtenerCalificación(0)', () => {
            assert.equal(obtenerCalificacion(0),"Muy deficiente");
        });
        it('obtenerCalificación(1)', () => {
            assert.equal(obtenerCalificacion(1),"Muy deficiente");
        });
        it('obtenerCalificación(2)', () => {
            assert.equal(obtenerCalificacion(2),"Muy deficiente");
        });
        it('obtenerCalificación(3)', () => {
            assert.equal(obtenerCalificacion(3),"Insuficiente");
        });
        it('obtenerCalificación(4)', () => {
            assert.equal(obtenerCalificacion(4),"Insuficiente");
        });
        it('obtenerCalificación(5)', () => {
            assert.equal(obtenerCalificacion(5),"Suficiente");
        });
        it('obtenerCalificación(6)', () => {
            assert.equal(obtenerCalificacion(6),"Bien");
        });
        it('obtenerCalificación(7)', () => {
            assert.equal(obtenerCalificacion(7),"Notable");
        });
        it('obtenerCalificación(8)', () => {
            assert.equal(obtenerCalificacion(8),"Notable");
        });
        it('obtenerCalificación(9)', () => {
            assert.equal(obtenerCalificacion(9),"Sobresaliente");
        });
        it('obtenerCalificación(10)', () => {
            assert.equal(obtenerCalificacion(10),"Sobresaliente");
        });
        it('obtenerCalificación(11)', () => {
            assert.equal(obtenerCalificacion(11),"Incorrecta");
        });

    });
    
});
