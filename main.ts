import { Customer } from './customer';
import * as Helpers from './utility';
import { SalesRap } from './salesRap';

const customer: Customer = new Customer();
const sales: SalesRap = new SalesRap();
document.getElementById('loadInfo')!.addEventListener('click', () => {

  customer.forename = Helpers.getValue('forename');
  customer.nickname= Helpers.getValue('nickname');
  customer.surname = Helpers.getValue('surname');
  customer.emailAddress = Helpers.getValue('email');
  customer.role = Helpers.getValue('role');
  customer.dateCreated = new Date();
  customer.firstName();
  customer.fullName();
  
});

document.getElementById('isLocked')!.addEventListener('click', () => {
  var element = <HTMLInputElement> document.getElementById("loadInfo");
  var checkBox = <HTMLInputElement>document.getElementById("isLocked");
  element.disabled = !checkBox.checked;
  checkBox.onclick = () => {
    element.disabled = !checkBox.checked;
    customer.locked = true;
  }
  customer.locked = false;
});
