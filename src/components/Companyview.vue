<template>
  <div>
    <!-- <button class="btn btn-primary float-right">    <router-link class="nav-link" to="/company">Adddata</router-link></button> -->
  
    <div class="float-left">
      <h1>companies list</h1>
      <p>
        <b>{{ data.length }}</b
        >:Results
      </p>
       </div> 
     
    
   
    

    <div>
      
      <button
        type="button"
        class="btn float-right"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        AddCompany
      </button>
       <div class="selecteddata">
        <select @change="paginationdata($event)">
          <option v-for="perpage of perpagerecords" :key="perpage">
            {{ perpage }}
          </option>
        </select>
        <label for="pagination">:perpage</label>
      </div>
     
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Companies List
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="postCompanyData">
                <div class="form-group">
                  <label for="exampleFormControlInput1" class="col-sm-3 col-form-label" >Company</label>
                  <input
                    type="text"
                    class="col-sm-6"
                    id="exampleFormControlInput1"
                    placeholder="enter companyname"
                    v-model="companydata.companyname"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1" class="col-sm-3 col-form-label">Phone</label>
                  <input
                    type="text"
                    class="col-sm-6"
                    id="exampleFormControlInput1"
                    placeholder="enter phone"
                    v-model="companydata.phone"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1" class="col-sm-3 col-form-label">Fax</label>
                  <input
                    type="number"
                    class="col-sm-6"
                    id="exampleFormControlInput1"
                    placeholder="enter fax"
                    v-model="companydata.fax"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1"  class="col-sm-3 col-form-label">Email</label>
                  <input
                    type="email"
                    class="col-sm-6"
                    id="exampleFormControlInput1"
                    placeholder="enter email"
                    v-model="companydata.email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1"  class="col-sm-3 col-form-label">City</label>
                  <input
                    type="text"
                    class="col-sm-6"
                    id="exampleFormControlInput1"
                    placeholder="enter city"
                    v-model="companydata.city"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1"  class="col-sm-3 col-form-label">State</label>
                  <input
                    type="text"
                    class="col-sm-6"
                    id="exampleFormControlInput1"
                    placeholder="enter state"
                    v-model="companydata.state"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="postCompanyData"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-stripped">
      <thead>
        <tr>
          <th>Id</th>
          <th>CompanyName</th>
          <th>Phone</th>
          <th>Fax</th>
          <th>Email</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tr v-for="(used, i) in companydetails" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ used.companyname }}</td>
        <td>{{ used.phone }}</td>
        <td>{{ used.fax }}</td>
        <td>{{ used.email }}</td>
        <td>{{ used.city }}</td>
        <td>{{ used.state }}</td>
        <!-- <td>{{used.fax}}</td>
        <td>{{used.work}}</td>
        <td>{{used.tags}}</td> -->
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CompanyView",
  data() {
    return {
      companiesList: [],
      data: [],
      userdata: [],
      perpagerecords: [3, 6, 9, 12],
      companydetails: [],
      companydata: {
        companyname: "",
        phone: null,
        fax: null,
        email: "",
        city: "",
        state: "",
      },
    };
  },
  mounted() {
    this.AddCompanyData();
  },
  methods: {
    AddCompanyData() {
      console.log(this.companiesList);
      axios
        .get(
          "https://companydata-69c3c-default-rtdb.firebaseio.com/company.json"
        )
        .then((res) => {
          this.companiesList = res.data;
          Object.keys(this.companiesList).forEach((result) => {
            // console.log(result);
            this.data.push(this.companiesList[result]);
            this.companydetails = this.data;
          });
        });
    },
    async postCompanyData() {
      console.log(this.companydata);
      const result = await axios.post(
        "https://companydata-69c3c-default-rtdb.firebaseio.com/company.json",
        this.companydata
      );
      this.companydata = result.data;
    },
    paginationdata(ev) {
      this.seletedVal = ev.target.value;
      if (this.seletedVal !== 0) {
        console.log(this.seletedVal);
        this.companydetails = this.data.slice(0, this.seletedVal);
        console.log(this.companydetails);
      }
    },
  },
};
</script>
<style scoped>
p {
  margin-right: 174px;
}
.btn {
  background-color: rgba(65, 0, 217, 255);
  color: white;
}
 select {
  border-radius: 10px;
 
} 

.selecteddata{
   margin-left:1471px;
 
    margin-top: 21px;
}

</style>
