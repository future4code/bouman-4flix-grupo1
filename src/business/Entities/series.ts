export class Series {

    constructor(
        private id: string,
        private title: string,
        private synopsis: string,
        private date: Date,        
        private link: string,
        private picture: string
    ) { }

    public getId = (): string => this.id

    public setId = (newId: string): void => {
        this.id = newId
    }

    public getTitle = (): string => this.title

    public setTitle = (newTitle: string): void => {
        this.title = newTitle
    }

    public getSynopsis = (): string => this.synopsis

    public setSynopsis = (newSynopsis: string): void => {
        this.synopsis = newSynopsis
    }

    public getDate = (): Date => this.date

    public setDate = (newDate: Date): void => {
        this.date = newDate
    }
    
    public getLink = (): string => this.link

    public setLink = (newLink: string): void => {
        this.link = newLink
    }

    public getPicture = (): string => this.picture

    public setPicture = (newPicture: string): void => {
        this.picture = newPicture
    }

}