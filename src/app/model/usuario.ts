import { Address } from './address';
import { Company } from './company';

export class Usuario {

    constructor(
        public id: number,
        public username: string,
        public email: string,
        public address: Address,
        public phone: string,
        public website: string,
        public company: Company

    ){}
}