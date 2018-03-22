import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../core/service/logger.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(logService:LoggerService) {
    logService.log("hello wold")
    console.log("DriverComponet 加载成功 ")
  }

  ngOnInit() {
  }

}
