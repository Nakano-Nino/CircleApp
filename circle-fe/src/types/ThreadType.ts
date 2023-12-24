import { UserType } from "./UserType";

export type ThreadType = {
    id: number,
    content: string,
    isImage: boolean,
    image: string,
    created_at: string,
    updated_at: string,
    users: UserType
}

export type RepliesType = {
    id: number,
    image: string,
    content: string,
    created_at: string,
    updated_at: string,
    users: UserType
    threads: ThreadType
}