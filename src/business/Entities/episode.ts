export class Episode {

    constructor(
        private id: string,
        private title: string,
        private synopsis: string,        
        private length: number,
        private link: string,
        private picture: string,
        private seriesId: string
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

    public getLength = (): number => this.length

    public setLength = (newLength: number): void => {
        this.length = newLength
    }

    public getLink = (): string => this.link

    public setLink = (newLink: string): void => {
        this.link = newLink
    }

    public getPicture = (): string => this.picture

    public setPicture = (newPicture: string): void => {
        this.picture = newPicture
    }

    public getSeriesId = (): string => this.seriesId

    public setSeriesId = (newSeriesId: string): void => {
        this.seriesId = newSeriesId
    }
}