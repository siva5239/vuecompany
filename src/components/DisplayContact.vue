<template>
  <div>
    <h1>display contact here</h1>
    <div class="container">
      <div class="grid-container">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>phone</th>
              <th>work1</th>
              <th>office</th>
              <th>fax</th>
              <th>work</th>
              <th>tags</th>
            </tr>
          </thead>
          <tr v-for="(used, i) in data" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ used.FirstName }}</td>
            <td>{{ used.LastName }}</td>
            <td>{{ used.email }}</td>
            <td>{{ used.phone }}</td>
            <td>{{ used.work1 }}</td>
            <td>{{ used.office }}</td>
            <td>{{ used.fax }}</td>
            <td>{{ used.work }}</td>
            <td>{{ used.tags }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DisplayContact",

  data() {
    return {
      result: [],
      data: [],
     
    };
  },
  mounted(){
      this.AddContactData()
  },
  methods: {
    AddContactData() {
      axios
        .get(
          "https://companydata-69c3c-default-rtdb.firebaseio.com/contact.json"
        )
        .then(res=> {this.result = res.data;
          Object.keys(this.result).forEach((resultdata) => {
            this.data.push(this.result[resultdata]);


          });
        });
         console.log(this.data)
    },
   
  },
};
</script>
