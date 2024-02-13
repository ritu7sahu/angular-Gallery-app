import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnInit {
  constructor(private _loader: LoaderService) {}
  @Input() images: any;
  // loading$ = this._loader.isLoading$;
  ngOnInit() {
    //console.log(this.images);
  }
}
