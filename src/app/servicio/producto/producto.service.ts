import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductoRespuesta } from 'src/app/interfaces/ProductoRespuesta';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly URL_PRODUCTOS = 'https://dummyjson.com/auth/products';
  private inicio = 0;
  private saltar = 0;
  private cantidad = 10;
  private $productos = new BehaviorSubject<Producto[]>([]);
  public producto = this.$productos.asObservable();

  constructor() { }

  public listarProductos(){

  }

  public siguientesProductos(){

  }

  public ProductosAnterior(){

  }
  
}
