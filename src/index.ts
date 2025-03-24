
import jwt from 'jsonwebtoken';

const payload: jwt.JwtPayload = {
  iss: 'https://example.com',
  sub: 'Vinaykv123'
};

const secretKey = "HelloWorld@1234";

const token = jwt.sign(payload, secretKey, {
  algorithm: 'HS256'
});

console.log(token);














