import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})

export class ServerComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName='roopam';

    constructor(){ 
        setTimeout (() => {
            this.allowNewServer = true;
        },  2500);
    }
    
    ngOnInit() { 
    }
        onCreateServer() { 
            this.serverCreationStatus = "server is creating";
    }
  
    onUpdateServerName(event : Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}