import { Injectable } from "@angular/core";
import { Lens } from "../models/lens";
import { Observable } from "rxjs";

@Injectable()
export class LensService{
    private description: string = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum."`;

    lens = [
        { id: 1, title: 'Designer Frame', price: 499, desc: this.description, image:'./../assets/two.jpeg', rating: 4.5, duration: 18.2, author: 'Steve smith'},
        { id: 2, title: 'Plastic Frame', price: 599, desc: this.description, image: './../assets/one.jpeg', rating: 4.9, duration: 20.8, author: 'Sarah King'},
        { id: 3, title: 'Rimless Frame', price: 449, desc: this.description, image: './../assets/three.jpeg', rating: 3.7, duration: 16.6, author: 'Mark Vought'},
        { id: 4, title: 'Black Frame', price: 599, desc: this.description, image: './../assets/four.jpeg', rating: 4.8, duration: 28.2, author: 'Sarah King'},
        { id: 5, title: 'Cat Eye look Frame', price: 649, desc: this.description, image: './../assets/five.jpeg', rating: 3.5, duration: 34.4, author: 'Steve smith'},
        { id: 6, title: 'Basic Frame', price: 329, desc: this.description, image: './../assets/six.jpeg', rating: 4.5, duration: 17.7, author: 'Steve smith'},
        { id: 7, title: 'Metallic Frame', price: 469, desc: this.description, image: './../assets/seven.jpeg', rating: 3.4, duration: 32.6, author: 'Mark Vought'},
        { id: 8, title: 'Round Frame', price: 1299, desc: this.description, image: './../assets/eight.jpeg', rating: 4.8, duration: 26.7, author: 'Sarah King'},
    ]

    getAlllenses(){
        return new Observable<Lens[]>((sub) => {
            setTimeout(() => {
                sub.next(this.lens);
            }, 3000)
        })
    }
}