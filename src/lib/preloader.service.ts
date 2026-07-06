import { inject, Service, signal, computed } from '@angular/core';
import { TranslationService } from '@angulartoolsdr/translation';

@Service()
export class PreloaderService {

  private loadingSignal = signal(false);
  private customMessage = signal<string | null>(null);

  display = signal(true);

  isLoading = this.loadingSignal.asReadonly();

  private translate = inject(TranslationService);

  message = computed(() =>
    this.customMessage() ??
    this.translate.instant('CARREGANDO')
  );


  show(message?: string): void {

    if (message) {
      this.customMessage.set(message);
    }

    this.loadingSignal.set(true);
  }


  hide(): void {

    this.loadingSignal.set(false);

    this.customMessage.set(null);
  }

}