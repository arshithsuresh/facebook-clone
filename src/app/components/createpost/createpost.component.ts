import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging/logging.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']  
})
export class CreatepostComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onCreatePost(): void {
    this.loggingService.logInformation("Create Post Click");
  }

}
