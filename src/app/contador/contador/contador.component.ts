import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    title: string = 'App Contador';
    numero: number = 10;
    base: number = 5;
    digito: number = 5;

    acomular(valor: number): void {
        this.numero += valor;
    }
}