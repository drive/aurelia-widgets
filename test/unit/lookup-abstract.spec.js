import {HttpStub} from '../helpers/httpstub';
import {EventAggregatorStub} from '../helpers/eventaggregatorstub';
import {LookupAbstract} from '../../src/lookup-abstract';

describe('lookup interface', () => {
    var lookupAbstract;
   
    beforeEach(() => {
        lookupAbstract = new LookupAbstract();
    });
    
    it('expect interface to have the following properties and methods', (done) => {
      
        expect(lookupAbstract.search).toBeDefined();
        expect(lookupAbstract.setDefaultSelection).toBeDefined();
        expect(lookupAbstract.formatItem).toBeDefined();
        expect(lookupAbstract.formatSelection).toBeDefined();
        done();
    });
    
});
