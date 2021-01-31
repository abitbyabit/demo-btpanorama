import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, } from '@angular/core';
import { IPackData } from 'src/app/shared/interface/IPackData';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss'],
  animations: [
    trigger('flipPack', [
      // state('active', style({
      //   transform: 'rotateY(-179deg)',
      // })),
      // state('inactive', style({
      //   transform: 'rotateY(0)',
      // })),

      state("default", style({ transform: "none" })),
      transition('* => inactive', [animate('500ms'), style({
        transform: 'rotateY(180deg)',
      })]),
      transition('* => active', [animate('500ms'), style({
        transform: 'rotateY(180deg)',
      })])

    ]),

    // trigger("cardFlip", [
    //   state(
    //     "default",
    //     style({
    //       transform: "none"
    //     })
    //   ),
    //   state(
    //     "flipped",
    //     style({
    //       transform: "rotateY(180deg)"
    //     })
    //   ),
    //   state(
    //     "matched",
    //     style({
    //       visibility: "false",
    //       transform: "scale(0.05)",
    //       opacity: 0
    //     })
    //   ),
    //   transition("default => flipped", [animate("400ms")]),
    //   transition("flipped => default", [animate("400ms")]),
    //   transition("* => matched", [animate("400ms")])
    // ])

  ]
})
export class PackComponent implements OnInit, OnChanges {
  @Input() packData?: IPackData;
  @Output() packClicked = new EventEmitter<IPackData>();// ngmodule binding setup
  flip: string = 'inactive';
  // flipState:string;// = "default" | "flipped" | "matched";

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log(changes['packData'].currentValue.isPackSelected)
    if (changes['packData'].currentValue.isPackSelected) {
      this.flip = "active";
    }
    else {
      this.flip = "default"
    }
    if (changes['packData'].currentValue.isPackSelectedPrevious) {
      this.flip = "active";

    }
  }
  packSelected(packData: IPackData | undefined) {
    this.packClicked.emit(packData);

  }



}
