import prismaClient from "../../prisma/prisma";

import {compare} from 'bcryptjs'

import {sign} from 'jsonwebtoken'
import { AuthControl } from "../../dto/auth.dto";



export class AuthService {
    async execute({username, password}: AuthControl) {
        
        const user = await prismaClient.user.findFirst({username
    }
}

