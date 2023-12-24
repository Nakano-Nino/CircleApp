import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import  { Threads } from "./Threads"
import { Replies } from "./replies"
import { Following } from "./following"
import { Likes } from "./likes"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    full_name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    photo_profile: string

    @Column()
    bio: string

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date

    @OneToMany(() => Threads, (threads) => threads.users)
    threads: Threads[]

    @OneToMany(() => Replies, (replies) => replies.users)
    replies: Replies[]

    @OneToMany(() => Following, (following) => following.following_id)
    following: Following[]

    @OneToMany(() => Following, (followed) => followed.followed_id)
    followed: Following[]

    @OneToMany(() => Likes, (likes) => likes.users)
    likes: Likes[]
}
