import { Component,OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fakultas-edit',
  templateUrl: './fakultas-edit.page.html',
  styleUrls: ['./fakultas-edit.page.scss'],
})
export class FakultasEditPage implements OnInit {
  id: any;
  namafakultas: any;
  keterangan: any;
  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,
    ) {
      this.route.params.subscribe((param: any) => {
        this.id = param.id;
        console.log(this.id);
        this.ambilFakultas(this.id);
      })
    }
    
    ngOnInit() {
    }

    ambilFakultas(id: any)
    { this._apiService.lihat(id, '/lihat.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let fakultas = hasil;
        this.namafakultas = fakultas.namafakultas;
        this.keterangan = fakultas.keterangan;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editFakultas() {
    let data = {
      id: this.id,
      namafakultas: this.namafakultas,
      keterangan: this.keterangan,
    }
    this._apiService.edit(data, '/edit.php')
    .subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.namafakultas = '';
        this.keterangan = '';
        this._apiService.notif('berhasil edit Fakultas');
        this.router.navigateByUrl('/fakultas');
      },
      error: (err: any) => {
        this._apiService.notif('gagal edit Fakultas');
      }
    })
  }
}