import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import ThreeSixty from '@mediaman/three-sixty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('videoPlayer') videoPlayer: any;
  currentIndex = 0;
  isArrowVisible: boolean = false;
  isRoundImages: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.isArrowVisible = true;
    }, 5000); // 5000 milliseconds = 5 seconds

    const img = this.elementRef.nativeElement.querySelector('.img-parallax');
    const imgParent = img.parentElement;
    const speed = img.dataset.speed;


    const parallaxImg = () => {
      const imgY = imgParent.offsetTop;
      const winY = window.pageYOffset;
      const winH = window.innerHeight;
      const parentH = imgParent.clientHeight;

      const winBottom = winY + winH;

      if (winBottom > imgY && winY < imgY + parentH) {
        const imgBottom = (winBottom - imgY) * speed;
        const imgTop = winH + parentH;
        const imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);

        this.renderer.setStyle(img, 'top', imgPercent + '%');
        this.renderer.setStyle(img, 'transform', `translate(-50%, -${imgPercent}%)`);
      }
    };

    parallaxImg.bind(this)();

    window.addEventListener('scroll', parallaxImg.bind(this));
  }

  donate(valueToPass: any) {
    // Using query parameters
    this.router.navigate(['/donation'], { queryParams: { sewa: valueToPass } });
  }

  onCanPlay() {
    if (this.videoPlayer.nativeElement.paused) {
      // User hasn't interacted with the page yet, so pause the video
      this.videoPlayer.nativeElement.pause();
    } else {
      // Video can start playing
      this.videoPlayer.nativeElement.play();
    }
  }


  onTimeUpdate() {
    // Check if video has buffered enough to play more
    if (this.videoPlayer.nativeElement.buffered.length > 0) {
      const bufferedEnd = this.videoPlayer.nativeElement.buffered.end(0);
      const currentTime = this.videoPlayer.nativeElement.currentTime;
      const diff = bufferedEnd - currentTime;

      // Start playing if there is enough buffer available
      if (diff >= 5) {
        this.videoPlayer.nativeElement.play();
      }
    }
  }

  changeBackgroundImage() {
    const backgroundElement = this.elementRef.nativeElement.querySelector(".baner-content");
    const item1 = this.elementRef.nativeElement.querySelector('.item-1');
    const backgroundImages = [
      "url(../../assets/img/1st-section.jpg)"
    ];

    backgroundElement.style.backgroundImage = backgroundImages[this.currentIndex];

    // Set the current image URL
    const currentImage = backgroundImages[this.currentIndex];

    // Set the next image as a background image on a hidden element
    const hiddenElement = document.createElement('div');
    hiddenElement.style.backgroundImage = `url(${currentImage})`;
    hiddenElement.style.visibility = 'hidden';
    document.body.appendChild(hiddenElement);

    // Calculate the width of the hidden element (next image width)
    const nextImageWidth = hiddenElement.offsetWidth;

    // Apply transition and background position to slide the next image from right to left
    backgroundElement.style.animation = 'slide 1s ease-in-out';
    backgroundElement.style.backgroundPosition = `${nextImageWidth}px 0%`;

    // Remove the hidden element
    document.body.removeChild(hiddenElement);

    this.currentIndex = (this.currentIndex + 1) % backgroundImages.length;
    item1.style.display = 'none';
    this.isArrowVisible = false;
    this.isRoundImages = true;
  }

  onSeeMoreClick() {
    this.router.navigate(['/gallery']); // Navigate to the 'other-page'
  }

}
