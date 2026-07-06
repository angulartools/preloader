import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { PreloaderService } from './preloader.service';

@Component({
  selector: 'lib-preloader',
  templateUrl: './preloader.html',
  styleUrls: ['./preloader.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Preloader {

  display = input<boolean>(true);

  preloaderService = inject(PreloaderService);

}