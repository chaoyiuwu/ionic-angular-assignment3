import { Pizza } from "./pizza";

export class CurrentOrder{
    orderedPizza: Pizza[];
    totalPrice: number;

    constructor() {
        this.totalPrice = 0;
        this.orderedPizza = [];
    }
    
    public AddPizza(pizza:Pizza){
        this.orderedPizza.push(pizza);
        this.totalPrice+=pizza.price;
    }

    public RemovePizza(pizza:Pizza){
        const index = this.orderedPizza.indexOf(pizza, 0);
        if (index >-1){
            this.orderedPizza.splice(index, 1);
            this.totalPrice -= pizza.price;
        }
    }
}