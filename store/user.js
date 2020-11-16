export const state = () => ({
  id: 1,
  fullname: "overcomer emiator",
  username: "ovmobile",
  avatar:require("~/static/drake.jpg"),
  sex: "male",
  birthday: "12-09-1997",
  institution: "uniben",
  faculty: "Physical sciences",
  department: "mathematics",
  course: "Industrial Mathematics",
  level: 400,

  isLoggedIn: true,

  followings: [

  ]

})

export const mutations = {
  changeUserName(state, text) {
    state.username = text
  },
  deleteUser(state) {
    state.id = -1,
      state.fullname = '',
      state.username = '',
      state.avatar = '',
      state.sex = '',
      state.birthday = '',
      state.institution = '',
      state.faculty = '',
      state.department = '',
      state.course = '',
      state.level = 0,
      state.isLoggedIn = false
  },

  setUser(state, details) {
    state.id = details.id,
      state.fullname = details.fullname,
      state.username = details.username,
      state.avatar = details.avatar,
      state.sex = details.sex,
      state.birthday = details.birthday,
      state.institution = details.institution,
      state.faculty = details.faculty,
      state.department = details.department,
      state.course = details.course,
      state.level = details.level
    state.isLoggedIn = true;
  },

  setIsLoggedIn(state, boolean) {
    state.isLoggedIn = boolean
  },

  Follow(state, person) {
    state.followings.push(person)
  },

  unFollow(state,person){
   for(let i = 0; i < state.followings.length;i++){
     if(state.followings[i].username == person.username){
      state.followings.splice(i,0);
      break;
     }
   }
  }
}
