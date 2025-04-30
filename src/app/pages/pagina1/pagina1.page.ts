import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TextToSpeech, TTSOptions } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
  standalone: false
})
export class Pagina1Page implements OnInit {

  texto: any;
  voice: any;
  idioma: any;

  public supportedLanguages: string[] = [];

  public supportedVoices: SpeechSynthesisVoice[] = [];

  constructor() {
  }

  public ngOnInit(): void {
    TextToSpeech.getSupportedLanguages().then(result => {
      this.supportedLanguages = result.languages;
      console.log(this.supportedLanguages);
    });

    TextToSpeech.getSupportedVoices().then(result => {
      this.supportedVoices = result.voices;
    });
  }

  public async speak(): Promise<void> {

    await TextToSpeech.speak({ text: this.texto, lang: this.idioma?.value, voice: this.voice?.value });
    console.log(this.texto + this.idioma + this.voice);
  }

  public async stop(): Promise<void> {
    await TextToSpeech.stop();
  }
}
