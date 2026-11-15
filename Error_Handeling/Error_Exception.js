try {
let res = 10/0;
if(!isFinite(res)) {
    throw new Error('Division by zero is not allowed');
}console.log(res);

} catch (error) {
    console.error('Error:', error.message);
}
finally {
    console.log('Execution completed');
}