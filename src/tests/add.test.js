const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Add two numbers', () => {
    const result = add(1, 5);
    expect(result).toBe(6);

});

test('Print Hello name', () => {
    const greeting = generateGreeting('Mike')
    expect(greeting).toBe('Hello Mike!')
})

test('Greeting for no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
})