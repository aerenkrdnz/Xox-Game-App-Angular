import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  mark: string = "";
  message: string = "";
  games: string[] = [];
  moves: any = [];
  
  constructor(){
    this.newGame();
  }

  newGame() {
    this.mark = "X";
    this.message = "Sıradaki: X";
    this.games = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",

    ];
  }

  setMark(index: number) {
    if(this.games[index]==""){
      this.games[index] = this.mark;
      this.moves.push([...this.games]);
      if (this.mark == "X") this.mark = "O"
      else this.mark = "X"
      this.message = `Sıradaki: ${this.mark}`
    }
    
  }

  returnSelectMove(index: number){
    this.games = this.moves[index];
  }
}
