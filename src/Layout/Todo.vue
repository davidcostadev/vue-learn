<template>
  <div id="todo">

    <form v-on:submit.prevent="onSubmit">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="input-group">
            <input type="text" class="form-control" v-model="newTask.title" placeholder="Nova Tarefa">
            <div class="input-group-btn"><button class="btn btn-info">Adicionar</button></div>
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
          <tr v-for="task in tasks" v-bind:class="task.complete === true ? 'success' : ''">
            <td>
              <input type="checkbox" v-model="task.complete">
            </td>
            <td class="title">{{task.title}}</td>
            <td>
              <button class="btn btn-xs btn-danger"><i class="glyphicon glyphicon-remove"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        tasks : [
          {
            title : 'Tarefa 1',
            complete : false
          },
          {
            title : 'Tarefa 2',
            complete : true
          }
        ],
        newTask : {
          title : ''
        }
      };
    },
    methods : {
      onSubmit () {
        // const task = this.newTask;
        const task = {
          title : this.newTask.title,
          complete : false
        };
        this.newTask.title = '';

        this.tasks.push(task);
      }
    }
  };
</script>

<style scoped>
  .success .title {
    text-decoration: line-through;
  }
</style>
