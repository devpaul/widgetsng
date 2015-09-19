import trait from '../decorators/traits';
import renderer from '../decorators/renderer';
import template from 'dojo/text!./templates/MyTemplatedView';
import Templated from '../traits/Templated';

@renderer
class MyTraits {
    rendering(): void {
        // finally! I don't need to call inherited()!
    }
}

@trait(MyTraits)
@trait(Templated)
export default class MyTemplatedView extends BaseWidget implements Templated {
    template: string = template;
}
