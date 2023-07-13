import axios from "axios";
export function fetchData(){
      return axios.get("http://localhost:5700/")
}
export function saveAdminData(data){
          return axios.post(`http://localhost:5700/admin`,data);
           
}
export function SignAdminData(data)
{
      return axios.post(`http://localhost:5700/admin/sign`,data)
}

  export function SavePurchase(data)
  {
          return axios.post("http://localhost:5700/savepurchasedata",data)
  }
    
export function SavePurchaseUpdate(id,obj){
      //   console.log(data);
          return axios.put(`http://localhost:5700/login/purchaseproduct/${id}/${obj}`)
}
export function removePurchaseData(id)
{
         return axios.delete(`http://localhost:5700/delete/cartitem/${id}`);
}
// export function UpdatePurchaseAdminData(id,obj)
// {
//         return axios.put(`http://localhost:5700/${id}/${obj}`);
// }