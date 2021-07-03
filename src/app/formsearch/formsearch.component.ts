import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-formsearch',
  templateUrl: './formsearch.component.html',
  styleUrls: ['./formsearch.component.css']
})
export class FormsearchComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute,
              private Route:Router) { }

  ngOnInit(): void {
  }

}
