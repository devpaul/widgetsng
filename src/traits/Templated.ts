import WidgetTrait from './WidgetTrait'
import renderer from '../decorators/renderer'

@renderer
class Templated extends WidgetTrait {
    rendering(parent: BaseWidget): void {
        let node = parent.domNode;
        let template = parent.template; // TODO add typings to parent

        // TODO parse the template and add it to the DOM
    }
}

export default Templated;
