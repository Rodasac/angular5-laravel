import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class ImageService {
  constructor(private http: Http, protected localStorage: AsyncLocalStorage) {
  }

  getImages(): Observable<Image[]> {
    return this.http
      .get('http://localhost:8000/api/v1/images')
      .map((response: Response) => {
          const resp = response.json();
          this.localStorage.removeItem('images').subscribe(() => {});
          this.localStorage.setItem('images', resp).subscribe(() => {});
          return resp;
      })
      .catch((error) =>
      {
        let img: Observable<Image[]>;
        this.localStorage.getItem<Observable<Image[]>>('images').subscribe((images) => {
          if(images != null) {
            img = images;
          }
        }, (error) => {
          img = Observable.throw(
            error.json().error || { message: 'Error del servidor' }
          );
        });
        
        return img;
      });
  }

  addImage(image: Object): Observable<Image[]> {
    return this.http
      .post('http://localhost:8000/api/v1/images', image)
      .map((response: Response) => response.json())
      .catch((error: any) =>
        Observable.throw(
          error.json().error || { message: 'Error del Servidor' }
        )
      );
  }

  getImage(id: String): Observable<Image[]> {
    return this.http
      .get('http://localhost:8000/api/v1/images/' + id)
      .map((response: Response) => response.json());
  }

  updateImage(image: Object): Observable<Image[]> {
    const apiUrl = 'http://localhost:8000/api/v1/images';
    const url = `${apiUrl}/${image['id']}`;
    return this.http
      .put(url, image)
      .map((response: Response) => response.json())
      .catch((error: any) =>
        Observable.throw(
          error.json().error || { message: 'Error del servidor' }
        )
      );
  }
}
