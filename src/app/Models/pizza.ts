export class Pizza {
    topping: string;
    size: string;
    quantity: number;
    price: number;

    constructor(topping: string, size: string, quantity: number){
        this.topping = topping;
        this.size = size;
        this.quantity = quantity;
        this.getPrice();
    }

    getPrice(){
        this.price = 10;
        switch (this.topping) {
            case "Vegetables":
            case "Mushrooms":
                this.price += 1.5;
                break;
            default: //** meat
                this.price += 3;
                break;
        }
        switch (this.size) {
            case "Medium":
                this.price += 1;
                break;
            case "Large":
                this.price += 2;
                break;
            case "Party":
                this.price += 3;
                break;
            default: //** small
                break;
        }
        this.price *= this.quantity;
    }
}