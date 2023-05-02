 const path = require('path')


import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json';
console.log(outputFile)
const endpointsFiles = [path.join(__dirname, 'Routes', 'post.routes.ts')];

//const endpointsFiles = '../Routes/post.routes.ts'
swaggerAutogen(outputFile, endpointsFiles);
