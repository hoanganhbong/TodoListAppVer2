export class Todo {
    id: number = new Date().getSeconds();
    text: string;
    isCompleted: boolean = false;
    constructor (name: string) {
        this.text = name;
    }
}
