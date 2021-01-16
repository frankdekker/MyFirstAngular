import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto-suggest',
  templateUrl: './auto-suggest.component.html',
  styleUrls: ['./auto-suggest.component.scss']
})
export class AutoSuggestComponent implements OnInit {
  public persons: { name: string; }[] = [];
  public selectedIndex: number = 0;
  public hasFocus: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.persons.push({name: 'Frank'});
    this.persons.push({name: 'Elwin'});
    this.persons.push({name: 'Bram'});
    this.selectedIndex = 0;
  }

  onFocusGained(): void {
    this.hasFocus = true;
  }

  onFocusLost(): void {
    this.hasFocus = false;
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.code === 'ArrowUp') {
      this.selectedIndex = (this.selectedIndex + this.persons.length - 1) % this.persons.length;
    } else if (event.code === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + this.persons.length + 1) % this.persons.length;
    }
  }
}
