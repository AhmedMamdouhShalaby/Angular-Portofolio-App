import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  imgSrcOne: string = '../../assets/poert1.png';
  imgSrcTwo: string = '../../assets/port2.png';
  imgSrcThree: string = '../../assets/port3.png';
  galleryImgSrc: string = '';
  clicked(imageSrc: string) {
    this.galleryImgSrc = imageSrc;
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.classList.remove('d-none');
    }
  }
  displayNone() {
    const gallery = document.getElementById('gallery');
    const imgGallery = document.getElementById('imgGallery');
    if (gallery && imgGallery) {
      const clickHandler = function (event: any) {
        // Check if the clicked element is not the gallery or a descendant of it
        if (!imgGallery.contains(event.target)) {
          gallery.classList.add('d-none');
          // Remove the click event listener after hiding the gallery
          document.removeEventListener('click', clickHandler);
        }
      };
      document.addEventListener('click', clickHandler);
    }
  }
}
