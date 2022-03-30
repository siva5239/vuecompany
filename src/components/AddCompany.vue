<template>

    <div class="card">
      <div class="card-header"> Add CompanyDetails</div>
        <div class="card-body">
      <form >
                <div class="form-group">
                  <label for="exampleFormControlInput1">Company</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter companyname"
                    v-model="companydata.companyname"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter phone"
                    v-model="companydata.phone"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Fax</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter fax"
                    v-model="companydata.fax"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter email"
                    v-model="companydata.email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter city"
                    v-model="companydata.city"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter state"
                    v-model="companydata.state"
                  />
                </div>
               <button class="btn btn-primary" @click="AddCompany">AddCompany</button>
              </form>
        </div>
      
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'AddContact',
   data(){
       return{
          companydata:{} 
       }
   },
   methods: {
    async AddCompany() {
      console.log(this.companydata);
   await axios.post(
        "https://companydata-69c3c-default-rtdb.firebaseio.com/company.json",
        this.companydata
      );
      this.companydata="";
     
    },
  },
}
</script>
<style  scoped>
  .card{
     width: 450px; 
     margin-left:550px;
     margin-top:40px
  }
</style>