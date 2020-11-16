export const state= () =>({
    id:"01",
    fullname:"overcomer emiator",
    name:"overcomer",
    sex:"male",
    birthday:"12-09-1997",
    institution:"uniben",
    falcuty:"Physical sciences",
    department:"mathematics",
    level:"400"
   
})

export const mutations={
    changeName(state,text){
        state.username = text
    },
    deleteUser(state){
       state.username = ''
    }
}