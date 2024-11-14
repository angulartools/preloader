import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PreloaderService {

  display = true;
  isLoading = new BehaviorSubject<boolean>(false);
  message;

  translate = inject(TranslateService);

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
