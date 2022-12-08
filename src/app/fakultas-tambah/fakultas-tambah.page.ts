import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fakultas-tambah',
  templateUrl: './fakultas-tambah.page.html',
  styleUrls: ['./fakultas-tambah.page.scss'],
})
export class FakultasTambahPage implements OnInit {
  id: any;
  namafakultas: any;
  keterangan: any;
  constructor(private router: Router, public _apiService: ApiService) { }
  ngOnInit() {

  }

  addFakultas() {
    let data = {
      namafakultas: this.namafakultas,
      keterangan: this.keterangan,
    }
    this._apiService.tambah(data, '/tambah.php')
    .subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.namafakultas = '';
        this.keterangan = '';
        this._apiService.notif('berhasil input Fakultas');
        this.router.navigateByUrl('/fakultas');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Fakultas');
      }
    })
  }
}
