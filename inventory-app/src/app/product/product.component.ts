import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  isSelected = false;

  onSelected(): boolean {
    this.isSelected = !this.isSelected;
    return false;
  }
}
