import { LightningElement, track } from "lwc";

export default class TodoList extends LightningElement {
  @track taskList = ["Dance", "Sleep", "Work", "Eat", "Go to sleep"];
  @track newTask;

  handleAdd() {
    const newTask = this.template.querySelector("lightning-input").value;
    this.taskList.push(newTask);
    console.log(this.taskList);
  }
  handleDelete(event) {
    this.taskList.splice(event.detail.index, 1);
  }
}
