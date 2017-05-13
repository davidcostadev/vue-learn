<template>
  <div id="todo">

    <form v-on:submit.prevent="onSubmit">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="input-group">
            <input type="text" class="form-control" v-model="newTask.title" placeholder="Nova Tarefa">
            <div class="input-group-btn"><button class="btn btn-info" :disabled="!canAddNewTask">Adicionar</button></div>
          </div>
        </div>
      </div>
    </form>

    <div v-show="newTask.title !== ''" class="panel panel-default">
      <div class="panel-body">
        {{newTask.title}}
      </div>
    </div>

    <div class="panel panel-default">
      <table class="table">
        <thead>
          <tr>
            <th colspan="2">Tarefa</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" v-bind:class="task.complete === true ? 'success' : ''">
            <td>
              <input type="checkbox" v-model="task.complete">
            </td>
            <td class="title">{{task.title}}</td>
            <td>
              <button class="btn btn-xs btn-danger" v-on:click="removeTask(index)"><i class="glyphicon glyphicon-remove"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            title: 'Tarefa 1',
            complete: false,
          },
          {
            title: 'Tarefa 2',
            complete: true,
          },
        ],
        newTask: {
          title: '',
        },
      };
    },
    computed: {
      canAddNewTask() {
        return this.newTask.title.length > 0;
      },
    },
    methods: {
      onSubmit() {
        if (this.canAddNewTask) {
          const task = {
            title: this.newTask.title,
            complete: false,
          };
          this.newTask.title = '';

          this.tasks.push(task);
        }
      },
      removeTask(index) {
        // console.log(index);

        // const index = this.tasks.indexOf(task);

        if (index > -1) {
          this.tasks.splice(index, 1);
        }
      },
    },
  };
</script>

<style scoped>
  .success .title {
    text-decoration: line-through;
  }
</style>
