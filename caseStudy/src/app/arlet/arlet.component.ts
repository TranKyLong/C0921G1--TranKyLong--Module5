import {Component, Injectable, OnInit} from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-arlet',
  templateUrl: './arlet.component.html',
  styleUrls: ['./arlet.component.css']
})
export class ArletComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {

  }

  simpleAlert() {
    Swal.fire('Hello Angular');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }

  erroalert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    });
  }

  topend(notication: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: notication,
      showConfirmButton: false,
      timer: 1500
    });
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

}
