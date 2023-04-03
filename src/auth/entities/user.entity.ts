import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    email: string

    @Column('text', {
        unique: true
    })
    username: string

    @Column('text')
    name: string

    @Column('text')
    lastname: string

    @Column('text')
    password: string

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column('bool', {
        default: false
    }
    )
    isActive: boolean
}
