import { Component, OnInit } from '@angular/core';
import { ImageDataService } from './../../services/image-data.service';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { previous, next, getImages } from '../../actions/image-data.actions';
import { paginationState } from '../../model/pagination';
import * as fromimages from '../../image-data.selectors';
import { Images } from './../../image.state';
import { LoaderService } from './../../services/loader.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  offset: number;
  pagesize: number;
  constructor(
    private imageService: ImageDataService,
    private _store: Store<paginationState>,
    private _loader: LoaderService
  ) {}
  loading$: Subject<boolean> = this._loader.isLoading$;
  public images: Images[];
  public readonly loaded$ = this._store.pipe(select(fromimages.getImages));
  // public readonly allBooks$: Observable<Book[]> = this.store.pipe(
  //   select(bookSelectors.getAllBooks)
  // );
  ngOnInit() {
    this._store.pipe(select(fromimages.getOffset)).subscribe((offset) => {
      this.offset = offset;
    });
    this._store.pipe(select(fromimages.getPagesize)).subscribe((pagesize) => {
      this.pagesize = pagesize;
    });
    this._store.dispatch(
      getImages({ offset: this.offset, pagesize: this.pagesize })
    );
    this._store.pipe(select(fromimages.getImages)).subscribe((img) => {
      this.images = img;
    });
  }
  // ngrxOnStoreInit() {
  //   this.loadPage();
  // }
  // loadPage() {
  //   console.log(this.images, this.offset, this.pagesize);
  //   this._store.dispatch(
  //     getImages({
  //       offset: this.offset,
  //       pageSize: this.pagesize,
  //       images: this.images,
  //     })
  //   );
  // }
  // getCurrentValue(): Observable<any> {
  //   return this._store
  //     .select((paginationState) => paginationState.pageSize)
  //     .pipe(filter(Boolean));
  // }
  previous_images() {
    this._store.dispatch(
      previous({ offset: this.offset, pagesize: this.pagesize })
    );
    console.log('next calling', this.offset);
    //this._store.dispatch(previous());
  }
  next_images() {
    let offset1;
    this._store.pipe(select(fromimages.getOffset)).subscribe((offset) => {
      offset1 = offset;
    });
    this._store.pipe(select(fromimages.getPagesize)).subscribe((pagesize) => {
      this.pagesize = pagesize;
    });
    console.log('next calling', offset1);

    // .subscribe((offset) => {
    //   this.offset = offset;
    //   console.log(offset, 'offset');
    // });
    this._store.dispatch(
      next({ offset: this.offset, pagesize: this.pagesize })
    );
    console.log('next calling', this.offset);
    //console.log(data, 'dispatch action');
  }
}
