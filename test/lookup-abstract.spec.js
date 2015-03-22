import {HttpStub} from './helpers/httpstub';
import {EventAggregatorStub} from './helpers/eventaggregatorstub';
import {LookupAbstract} from '../src/widgets/lookup-models';

describe('lookup interface', () => {
    var lookupAbstract;
   
    beforeEach(() => {
        lookupAbstract = new LookupAbstract();
    });
    
    it('expect interface to have the following properties and methods', () => {
        expect(lookupAbstract.value).toBeDefined();
        expect(lookupAbstract.search).toBeDefined();
        expect(lookupAbstract.label).toBeDefined();
        expect(lookupAbstract.placeholder).toBeDefined();
        expect(lookupAbstract.setDefaultSelection).toBeDefined();
        expect(lookupAbstract.formatItem).toBeDefined();
        expect(lookupAbstract.formatSelection).toBeDefined();
    });
    
});
