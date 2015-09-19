export default class BaseWidget {
    public domNode: HTMLElement = null;

    private renderers:Renderer[];

    private handlers:Handlers[];

    constructor(kwArgs?:Object) {
        this.renderers = [];
        this.handlers = [];
    }

    /**
     * Initialize the domNode here
     */
    prerendering(): void {

    }

    /**
     * Render the widget before attaching to the dom
     * behaviors and setters are called after this step
     */
    rendering(): void {
    }

    /**
     * The node has been created but not yet attached to the dom
     */
    postRendering(): void {
    }

    /**
     * handles the lifecycles of the widget and renderer traits
     * After startup is the last chance for extended modules to make changes
     */
    startup(): Promise<any> {
        // 1. initialize the DOM node
        // 2. trait prerendering
        // 3. rendering
        // 4. trait rendering
        // 5. postRendering
        // 6. trait postRendering
        // 7. startup
    }

    addRenderer(renderer:Renderer): void {
        this.renderers.push(renderer);
    }

    addHandler(handler:Handler): void {
        this.handlers.push(handler);
    }
}
