import {responseTs} from '../src/my-date-parser-ts'
import {responseJS} from '../src/my-date-parser'


describe('Masala date integration ', ()=>{

    test('js', ()=>{
        expect(responseJS.isAccepted()).toBeTruthy()
    })

    test('TS', ()=>{
        expect(responseTs.isAccepted()).toBeTruthy()
    })


})