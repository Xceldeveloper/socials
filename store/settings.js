export const state = () =>({
    sideNav:false,
    sideNavNeutral:false
})

export const mutations ={
    toggleSideNav(state,type){
       state.sideNav = type
    },
    toggleSideNavNeutal(state,type){
        state.sideNavNeutral = type
     }
}