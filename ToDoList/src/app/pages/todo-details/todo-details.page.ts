import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from './../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  todo: Todo = {
    task: 'Test 123',
    createdAt: new Date().getTime(),
    priority: 2
  }

  todoId = null;

  constructor(
    private todoSvc: TodoService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingCtrl.create({
      message: 'loading todo...',
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();

    this.todoSvc.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingCtrl.create({
      message: 'loading todo...',
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();

    if (this.todoId) {
      this.todoSvc.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('home');
      });
    } else {
      this.todoSvc.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.navCtrl.navigateBack('home');
      });
    }
  }
}
