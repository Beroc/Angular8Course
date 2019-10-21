import { Component } from '@angular/core';

@Component({ // Hier werden JavaScript Objekte zur Konfiguration der Component übergeben
    selector: 'app-server', // HTML-Selektor mit dem die Component in anderen Components verwendet werden kann verwendet werden kann
    templateUrl: './server.component.html' // Um das Template an die Component zu referenzieren 
})
export class ServerComponent { // export class, um die Klasse auch außerhalb des Files nutzen zu können

}