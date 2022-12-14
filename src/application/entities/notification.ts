/* eslint-disable prettier/prettier */
import { Content } from "./content";
import { Replace } from "src/helpers/Replace";
import { randomUUID } from "crypto";

export interface NotificationProps{
    recipientId: string;
    content: Content;// pegando a validação desse campo no arquivo "content.ts"
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, {createdAt?: Date}>){
        this._id = randomUUID();
        this.props = {...props, createdAt: props.createdAt ?? new Date()};
    }

    public get id() {
        return this._id;
    }

    public set recipentId(recipentId: string){
        this.props.recipientId = recipentId
    }

    public get recipentId(): string{
        return this.props.recipientId;
    }

    public set content(content: Content){
        this.props.content = content
    }

    public get content(): Content{
        return this.props.content;
    }

    public set category(category: string){
        this.props.category = category
    }

    public get category(): string{
        return this.props.category;
    }
    
    public set readAt(readAt: Date | null | undefined){
        this.props.readAt = readAt
    }

    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }

    public get createdAt(): Date{
        return this.props.createdAt;
    }
}

