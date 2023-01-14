import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss'],
})
export class AddProductDialogComponent implements OnInit {
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  addProcuct() {
    console.log(this.productForm.value);
  }
}
