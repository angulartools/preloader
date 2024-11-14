import { Component, Input } from '@angular/core';
import { PreloaderService } from './preloader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-preloader',
  templateUrl: './preloader.component.html',
  standalone: true,
  imports: [AsyncPipe]
})
export class PreloaderComponent {
  @Input() display: boolean;

  isLoading;
  message = '';

  constructor(public preloaderService: PreloaderService) {
    this.isLoading = this.preloaderService.isLoading;
  }
}
