import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-image-create',
  templateUrl: './admin-image-create.component.html',
  styleUrls: ['./admin-image-create.component.css']
})
export class AdminImageCreateComponent implements OnInit {
  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit() {}

  createImage(image) {
    this.imageService.addImage(image).subscribe(
      imageR => {
        console.log(imageR);
        this.router.navigate(['/admin/images']);
      },
      error => console.log(<any>error)
    );
  }
}
