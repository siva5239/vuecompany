import { createRouter, createWebHistory } from 'vue-router';
// import Company from '@/components/Company.vue'
// import HelloWorld from '@/components/HelloWorld'
import Companyview from '@/components/Companyview.vue'
import AddCompany from '@/components/AddCompany.vue'
import AddContact from '../components/AddContact.vue'
import DisplayContact from '../components/DisplayContact.vue'
const routes = [
// {
//     path: '/company',
//     name: 'CompanyName',
//     component: Company
// },
{
    path: '/',
    name: 'CompanyView',
    component:  Companyview 
},
{
    path: '/addcompany',
    name: 'AddCompany',
    component: AddCompany
},
{
    path: '/addcontactdata',
    name: 'AddContact',
    component: AddContact
},
{
    path: '/getcontactdata',
    name: 'DisplayContact',
    component: DisplayContact
}];
const router=createRouter({
    history: createWebHistory(),
    routes})
export default router