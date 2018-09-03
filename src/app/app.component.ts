import { Component } from '@angular/core';
import { TasksDetailsDataService } from './services/tasks-details-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  thirdLevelTask= [];
  taskWithThreeSubTask= [];
  allTask= [];
  taskWithParentTaskAndSubTask = [];
  constructor(private taskDataService:TasksDetailsDataService ) { }


ngOnInit() {
  /**
 * Get All Task Details
 */
this.taskDataService.getAllTaskDetails().subscribe(
  (result) => {
    console.log(result);
   let taskDataObj=result;

      Object.keys(taskDataObj).forEach(key => {
        this.allTask.push(taskDataObj[key]);
      })

      console.log(this.allTask);

  },
  (error) => {
  /** Perform Error Handelling Here **/
    console.log('error occurred');
  }
);


/**
 * Get Task With Parent Task And SubTask Details
 */
    this.taskDataService.getTaskWithParentTaskAndSubTaskDetails().subscribe(
      (result) => {
        console.log(result);
        let taskDataObj=result;

          Object.keys(taskDataObj).forEach(key => {
            this.taskWithParentTaskAndSubTask.push(taskDataObj[key]);
          })

          console.log(this.taskWithParentTaskAndSubTask);

      },
      (error) => {
      /** Perform Error Handelling Here **/
        console.log('error occurred');
      }
    );

/**
 * Get Task With atleast three sub tasks
 */
this.taskDataService.getTaskWithThreeSubTask().subscribe(
  (result) => {
    console.log(result);
    let taskDataObj=result;

      Object.keys(taskDataObj).forEach(key => {
        this.taskWithThreeSubTask.push(taskDataObj[key]);
      })

      console.log(this.taskWithThreeSubTask);

  },
  (error) => {
  /** Perform Error Handelling Here **/
    console.log('error occurred');
  }
);


/**
 * Get Third level task in heirarchy
 */
this.taskDataService.getThirdLevelTask().subscribe(
  (result) => {
    console.log(result);
    let taskDataObj=result;

      Object.keys(taskDataObj).forEach(key => {
        this.thirdLevelTask.push(taskDataObj[key]);
      })

      console.log(this.taskWithThreeSubTask);

  },
  (error) => {
  /** Perform Error Handelling Here **/
    console.log('error occurred');
  }
);



  }
}
