import prismaClient from '../../prisma/prisma'


import {hash} from 'bcryptjs'
import { UserControl } from '../../dto/user.dto';


export class UserService {
async execute({username, password}: UserControl) {

    const inputUppercase = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})/;


    if(username.length < 3) {
        throw new Error('Usuário incorreto')
    }

    if(password.length < 8) {
        throw new Error('Senha incorreta')
    }
    else if(!inputUppercase.exec(password)) {
        throw new Error('Necessário uma letra maiuscula, minuscula e um caracter especial @, #, $, %, &')    
    }

const checkUserExists =  await prismaClient.findFirst({
    where: {
        username: username
    }
})

if(!checkUserExists) throw new Error('Usuário ja consta no sistema')

const passwordHash = await hash(password, 16);

const user = await prismaClient.create({
    data: {
        username: username,
        password: passwordHash
    },
    select: {
        id: true,
    }
})

if(user.id >= 0) {
    const account = await prismaClient.create({
        data: {
            balance:100,
            userId: user.id
        }
    })
}

return user;

 }
    }
