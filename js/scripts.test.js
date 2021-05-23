const scripts = require('./scripts');

test (`
       Dado la historieta Los Vengadores: La Guerra Kree-Skrull con un precio de 21$ 
       Cuando su estado es Excelente
       Entonces el descuento es de 10% equivalente a 2,1$
`, () => {
    expect (scripts.CalculateDiscount (21, 'Excelente', 10)).toBe(2.1);
});