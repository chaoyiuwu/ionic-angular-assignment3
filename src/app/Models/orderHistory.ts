import { CurrentOrder } from "./currentOrder";

export class OrderHistory extends CurrentOrder{
    placedTime: string;

    constructor(order : CurrentOrder, time : string) {
        super();
        this.placedTime = time;
        order.orderedPizza.forEach(p => {
            super.AddPizza(p);    
        });
        
    }
}