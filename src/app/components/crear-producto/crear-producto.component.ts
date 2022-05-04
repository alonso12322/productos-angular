import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
productoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarProducto() {
    console.log(this.productoForm);

    console.log(this.productoForm.get('producto')?.value);

    const PRODUCTO: Producto  = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('producto')?.value,
      precio: this.productoForm.get('producto')?.value,
    }
    console.log(PRODUCTO);

    this.toastr.success('El producto fue registrado con éxito', 'Producto registrado');
    this.router.navigate(['/']);
  }

}