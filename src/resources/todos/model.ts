class Schema {
    name: string;
    schema: Record<string, string>;

    constructor() {
        this.name = 'todos';
        this.schema = {
            name: 'a',
            description: 'b',
            status: 'c',
        };
    }

    createModel(): { name: string; description: string; status: string } {
        return this.schema as {
            name: string;
            description: string;
            status: string;
        };
    }
}

const schema = new Schema();

export default schema.createModel();
