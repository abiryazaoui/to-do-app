import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() { }

  ngOnInit(): void {
    this.loadGoogleTranslate();
  }

  loadGoogleTranslate(): void {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    
    const googleTranslateInit = document.createElement('script');
    googleTranslateInit.type = 'text/javascript';
    googleTranslateInit.innerHTML = `
      function googleTranslateElementInit() {
          new google.translate.TranslateElement(
              {pageLanguage: 'fr'},
              'google_translate_element'
          );
      }
    `;
    document.body.appendChild(googleTranslateInit);
  }
}
