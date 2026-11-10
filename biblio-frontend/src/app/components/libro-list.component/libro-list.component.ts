import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {
  libros: Libro[] = [];
  modoEdicion: boolean = false;

  libroForm: Libro = {
    titulo: '',
    autor: '',
    anioPublicacion: new Date().getFullYear(),
    genero: ''
  };

  constructor(
    private libroService: LibroService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.obtenerLibros().subscribe({
      next: (data: Libro[]) => { 
        this.libros = data; 
        this.cdr.detectChanges();
      },
      error: (err: any) => { console.error('Error al cargar libros:', err); }
    });
  }

  guardarLibro(): void {
    if (this.modoEdicion && this.libroForm.id) {
      this.libroService.actualizarLibro(this.libroForm.id, this.libroForm).subscribe({
        next: () => { 
          this.cargarLibros(); 
          this.resetForm(); 
        },
        error: (err: any) => console.error('Error al actualizar:', err)
      });
    } else {
      this.libroService.crearLibro(this.libroForm).subscribe({
        next: () => { 
          this.cargarLibros(); 
          this.resetForm(); 
        },
        error: (err: any) => console.error('Error al crear:', err)
      });
    }
  }

  editarLibro(libro: Libro): void {
    this.libroForm = { ...libro };
    this.modoEdicion = true;
  }

  eliminarLibro(id?: number): void {
    if (id && confirm('¿Estás seguro de eliminar este libro?')) {
      this.libroService.eliminarLibro(id).subscribe({
        next: () => this.cargarLibros(),
        error: (err: any) => console.error('Error al eliminar:', err)
      });
    }
  }

  resetForm(): void {
    this.libroForm = { titulo: '', autor: '', anioPublicacion: new Date().getFullYear(), genero: '' };
    this.modoEdicion = false;
    this.cdr.detectChanges();
  }
}