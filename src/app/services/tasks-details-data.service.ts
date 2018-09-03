import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class TasksDetailsDataService {

  url: string;
  constructor(private _http: HttpClient) { 
    this.url = environment.gspannTaskApiURL;
  }

/**
 * Get All Tasks
 */
  getAllTaskDetails(){
    return this._http.get<String>(this.url + 'getAllTasks');
  }
/**
 * Get a task with parent and child 
 */
  getTaskWithParentTaskAndSubTaskDetails() {
    return this._http.get<String>(this.url + 'getTaskWithParentTaskAndSubTask');
  }
  /**
 * Get a task with atlease three tasks
 */
  getTaskWithThreeSubTask(){
    return this._http.get<String>(this.url + 'getTaskWithThreeSubTask');
  }
  /**
 * Get a task at third level in heirarchy
 */
  getThirdLevelTask(){
    return this._http.get<String>(this.url + 'getThirdLevelTask');
  }
}
