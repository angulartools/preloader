import { inject, Injectable } from '@angular/core';
import { TranslationService } from '@angulartoolsdr/translation';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PreloaderService {

  display = true;
  isLoading = new BehaviorSubject<boolean>(false);
  message;

  translate = inject(TranslationService);

  constructor() {
    this.message = this.translate.instant('CARREGANDO');
  }

  show(message = null) {
    this.isLoading.next(true);
    if (message !== null) {
      this.message = message;
    }
  }
  hide() {
    this.isLoading.next(false);
    this.message = this.translate.instant('CARREGANDO');
  }
}
