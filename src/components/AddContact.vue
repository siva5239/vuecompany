<template>
<div>
    
    <div class="container">
        <div class="grid-container">
        <h1>Add a Contact</h1>
      <form >
        <div class="form-group row">
          <label for="exampleSelect" class="col-sm-4 col-form-label"
            >Select which form you want to fill out:</label
          >
          <div class="col-sm-5">
            <select class="form-control" id="exampleSelect"  v-model="userdata.basicaddcontactform">
              <option value="Basic Add Contact Form" selected>
                Basic Add Contact Form
              </option>
              <option value="Basic Add Form">Basic Add Form</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label
            for="exampleSelect"
            class="col-sm-3 col-form-label"
            id="labeldata"
            >Select Action set</label
          >
          <div class="col-sm-3">
            <select class="form-control" id="selectboxdata" v-model="userdata.selectactionset">
              <option value="one" selected>one</option>
              <option value="two">Two</option>
              <option value="three">three</option>
              <option value="four">four</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="firstName" class="col-sm-3 col-form-label"
            >FirstName</label
          >
          <div class="col-sm-3">
            <input type="text" class="form-control" id="firstnamedata" v-model="userdata.FirstName" />
          </div>
        </div>
        <div class="form-group row">
          <label for="LastName" class="col-sm-3 col-form-label">LastName</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="lastnamedata"  v-model="userdata.LastName" />
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-3">
            <input type="email" class="form-control" id="emaildata" v-model="userdata.email"/>
          </div>
          </div>
       
        <div class="form-group row">
          <label for="phone" class="col-sm-3 col-form-label">Phone</label>
          <div class="col-sm-5">
            <div class="row" id="phone">
              <div class="col-sm-3">
                <select class="form-control" id="selecteddata" v-model="userdata.phone">
                  <option value="work" selected>Work</option>
                  <option value="office">Office</option>
                </select>
              </div>

              <div class="col-sm-5">
                <input type="text" class="form-control" id="phonedata" v-model="userdata.work1" />
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="mobiledata"  v-model="userdata.office" />
              </div>
            </div>
          </div>
        </div>
         <div class="form-group row">
          <label for="fax" class="col-sm-3 col-form-label">Fax</label>
          <div class="col-sm-4">
            <div class="row" id="phone">
              <div class="col-sm-4">
                <select class="form-control" id="selecteddata" v-model="userdata.fax">
                  <option value="work" selected>Work</option>
                  <option value="office">Office</option>
                </select>
              </div>

              <div class="col-sm-5">
                <input type="text" class="form-control" id="phonedata"  v-model="userdata.work" />
              </div>
             
            </div>
          </div>
        </div>
        <h3> Add Tags</h3>
        <p>Tags are used to categorize your contacs or trigger automated compaigns</p>
        <div class="col-5">
            <input type="text" placeholder="please enter tag here..." class="form-control" id="selecttag"  v-model="userdata.tags"/>
        </div>
        <div id="buttonid">
         <button class="btn btn-primary">Save</button>
         <button class="btn btn-outline-primary" id="buttonmoove" @click="addContactData" >Save&Add Another Contact</button>
         </div>
      </form>
        </div>
    </div>
</div>
</template>
<script>

import axios from 'axios'
export default {
     name:'AddContact',
     data(){
         return{
            userdata: {
        basicaddcontactform: "",
        selectactionset: "",
        FirstName: "",
        LastName: "",
        email: "",
        phone: null,
        work1: "",
        office: "",
        fax: null,
        work: "",
        tags: "",
      }, 
         }
     },
     methods:{
       async  addContactData(e){
              e.preventDefault()
             console.log(this.userdata)
        await    axios.post("https://companydata-69c3c-default-rtdb.firebaseio.com/contact.json",this.userdata);
           
         }
          
     }
}
</script>
<style scoped>
.selectdata {
  margin-right: 900px;
}
/* .labeldata{
       margin-right:300px
   } */
#exampleSelect {
  margin-left: -49px;
  border-radius: 10px;
}
#selectboxdata {
  margin-left: -80px;
   border-radius: 10px;
}
#labeldata {
  margin-left: -24px;
}
#firstnamedata {
  margin-left: -105px;
}
#lastnamedata {
  margin-left: -105px;
}
#emaildata {
  margin-left: -105px;
}
#phonedata {
  margin-left: -110px;
}
#mobiledata {
  margin-left: -133px;
}
#phone {
  margin-left: -30px;
}
#selecteddata {
  margin-left: -92px;
  border-radius: 10px;
}
h1{
    margin-right: 770px;
}
h3{
    margin-right: 922px;
}
p{
      margin-right: 520px;
  }
#selecttag{
    margin-left: 20px;
}
 #buttonid{
      margin-right: 751px;
      margin-top:33px
  }
  #buttonmoove{
      margin-left:10px
  }
  .container{
      margin-left:20px;
  }
  .grid-container{
      
        border: 2px ;
         margin: 10px;
        padding: 20px;
        display: grid;
         /* grid-template-columns: auto auto auto; */
   }
</style>
