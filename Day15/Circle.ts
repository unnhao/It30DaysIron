import {Composite} from './Composite';
export class Circle implements Composite{
    add(c):void{
        throw new Error('I can not do it');
    }
    remove(c):void{
        throw new Error('I can not do it');
    }
    draw():void{
        console.log('Draw a Circle');
    }
}