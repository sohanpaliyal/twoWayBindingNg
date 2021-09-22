import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() size!:number;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }
  inc(){this.resize(+1)}
  dec(){this.resize(-1)}
  resize(num:number){
    this.sizeChange.emit(this.size+num)
  }
  ngOnInit(): void {
  }

}
