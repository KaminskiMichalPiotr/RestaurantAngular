import { Component } from '@angular/core';
import {Lightbox} from "ngx-lightbox";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  _albums:any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 20; i++) {
      const src = 'assets/home/gallery/' + i + '.webp';
      const caption = '';
      const thumb = 'assets/home/gallery/' + i + '-thumb.webp';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }

  Number(i: number) {
    let x = +i;
    console.log("works + " + x)
    return i;

  }
}

