import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {UserEntity} from "../../users/domain/user.entity";
import { BlogEntity } from './blogs.entity';


@Entity('blogBan')
export class BlogBanEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    blogId: string;

    @ManyToOne(() => UserEntity, (user) => user.blogsBans, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @ManyToOne(() => BlogEntity, (blog) => blog.blogsBans, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'blogId' })
    blog: BlogEntity;

}
