export default class Note {
    id: number;
    title: string;
    text: string;

    constructor(title: string, text: string) {
        this.id = Math.random() * 1000;
        this.title = title;
        this.text = text;
    }
}