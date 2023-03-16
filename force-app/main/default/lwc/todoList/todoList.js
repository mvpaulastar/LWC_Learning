import { LightningElement, track } from "lwc";

export default class TodoList extends LightningElement {
  @track taskList = [
    {
      id: 1,
      task: "Dance"
    },
    {
      id: 2,
      task: "Eat"
    },
    {
      id: 3,
      task: "Sleep"
    }
  ];
  newTask;

  handleAdd() {
    const newTask = {
      id: this.taskList.length + 1,
      task: this.template.querySelector("lightning-input").value
    };
    console.log(newTask);
    this.taskList = [...this.taskList, newTask];
  }
  handleDelete(event) {
    this.taskList.splice(event.target.value, 1);
  }
}
