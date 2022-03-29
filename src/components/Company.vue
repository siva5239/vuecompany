<template>
  <div>
  
    <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            AddCompany
      </button>
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
              <form @submit.prevent="AddCompanyData">
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
              <button type="button" class="btn btn-primary"  @click="AddCompanyData">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CompanyName",
  data() {
    return {
      companydata: {
        //    companyname:'',
        //    phone:null,
        //    fax:null,
        //    email:'',
        //    city:'',
        //    state:''
      },
    };
  },
  methods: {
    async AddCompanyData() {
      console.log(this.companydata);
      const result = await axios.post(
        "https://companydata-69c3c-default-rtdb.firebaseio.com/company.json",
        this.companydata
      );
      this.companydata = result.data;
    },
  },
};
</script>
<style scoped>
</style>