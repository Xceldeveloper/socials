<template>
  <div class="background">
    <style>
  :root {
    --move-login:{{translatexx}}
  }
    </style>
    <div class="login-form-cover">
      <div class="login-form" :class="{'sign-up-active':signUp}">
        <div class="overlay-container laptop-screen tablet-screen">
          <div class="overlay laptop-screen tablet-screen">
            <div class="overlay-left">
              <h2>Already have an account ?</h2>
              <p>Please login with your personal info</p>
              <button id="signIn" @click="signUp = !signUp" v-if="!signingUp">Log in</button>
            </div>
            <div class="overlay-right">
              <h2>Welcome Friend !!!</h2>
              <p>Don't have an account create one now it won't take long</p>
              <button id="signUp" @click="signUp = !signUp" v-if="!signingIn">Create Account</button>
            </div>
          </div>
        </div>

        <div class="login-container">
          <h2>LOG IN</h2>
          <br />
          <v-text-field
            rounded
            outlined
            v-model.trim="username"
            append-icon="mdi-username"
            label="Username"
            :rules="[rules.required]"
            light
            type="text"
            color="#000000"
          ></v-text-field>

          <v-text-field
            v-model.trim="password"
            outlined
            light
            rounded
            color="#000000"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show2 = !show2"
          ></v-text-field>

          <span v-if="!signingIn" class="forgot-password">forgot password?</span>
          <br />
          <br />

          <v-btn
            width="150px"
            :disabled="disbleSignInBtn"
            dark
            rounded
            :loading="signingIn"
            @click="signIn"
          >LOG IN</v-btn>

          <span
            class="mobile-screen dont-have-account"
            @click="toggleSlide('translateX(-50%)')" v-if="!signingIn"
          >Don't have an account?</span>
        </div>

        <div class="signin-container">
          <br />
          <h1>Register</h1>
          <span
            class="mobile-screen dont-have-account"  v-if="!signingUp"
            @click="toggleSlide('translateX(0%)')"
          >Already have an account?</span>
          <!-- <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span> -->
          <div id="register-cover">
            <br />
            <v-text-field
              light
              rounded
              outlined
              :error-messages="errors.fullname"
              v-model.trim="fullname"
              color="#000000"
              name="fullname"
              label="Fullname"
              hint="Surname first,(separate names with space or coma)"
            ></v-text-field>

            <v-text-field
              light
              rounded
              outlined
              v-model.trim="newusername"
              :error-messages="errors.username"
              color="#000000"
              name="Username"
              label="Username"
            ></v-text-field>

            <v-radio-group v-model="gender" row :error-messages="errors.gender">
              <v-radio label="Male" color="#000000" value="Male"></v-radio>
              <v-radio label="Femail" color="#000000" value="Female"></v-radio>
            </v-radio-group>

            <v-dialog
              ref="dialog"
              v-model="birthdayModal"
              :return-value.sync="birthday"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model.trim="birthday"
                  :error-messages="errors.birthday"
                  label="Birthday"
                  readonly
                  v-on="on"
                  color="#000000"
                  outlined
                ></v-text-field>
              </template>

              <v-date-picker
                v-model="birthday"
                :max=" new Date() | moment('subtract', '15 years','YYYY')"
                :min=" new Date() | moment('subtract', '30 years','YYYY')"
                scrollable
                color="#000000"
              >
                <v-spacer></v-spacer>
                <v-btn text light color="#000000" @click="birthdayModal = false">Cancel</v-btn>
                <v-btn dark color="#000000" @click="$refs.dialog.save(birthday)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
            <br />

            <v-autocomplete
              v-model.trim="university"
              color="#000000"
              :loading="universitiesLoading"
              :items="universitiesList"
              item-text="name"
              :search-input.sync="searchUniversities"
              cache-items
              outlined
              :error-messages="errors.university"
              item-color="#000000"
              hide-no-data
              hide-details
              hint="School's full name"
              label="What University ?"
            ></v-autocomplete>
            <br />

            <v-autocomplete
              v-if="university != ''"
              v-model.trim="course"
              color="#000000"
              :loading="coursesLoading"
              :items="coursesList"
              item-text="course"
              :search-input.sync="searchCourses"
              cache-items
              :error-messages="errors.course"
              outlined
              item-color="#000000"
              hide-no-data
              hide-details
              hint="Just type thename of the course"
              label="Course of Study ?"
            ></v-autocomplete>
            <br />

            <v-select
              v-if="course != ''"
              :items="levels"
              label="Level ?"
              name="Level ?"
              outlined
              :error-messages="errors.level"
              v-model.trim="level"
              color="#000000"
              item-color="#000000"
            ></v-select>

            <v-text-field
              light
              rounded
              outlined
              v-model.trim="email"
              :error-messages="errors.email"
              color="#000000"
              name="Email"
              label="Email"
              type="email"
            ></v-text-field>

            <v-text-field
              v-model.trim="newpassword"
              outlined
              light
              rounded
              color="#000000"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="errors.password"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>by clicking register you agree to our
            <nuxt-link to>terms and conditions</nuxt-link>
            <br />
            <br />
            <v-btn
              width="150px"
              color="#000000"
              dark
              rounded
              :loading="signingUp"
              @click="signUpx"
            >REGISTER</v-btn>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>

    <v-snackbar v-model="snackbar" :timeout="2000">{{ snackbarText }}</v-snackbar>
  </div>
</template>

 <script>
import TEST from "~/assets/libs/tests.js";
export default {
  head() {
    const title = "Sign in or Sign up";
    return {
      title
    };
  },

  mounted() {
    //  console.log(this.$moment.locale());
  },
  data() {
    return {
      signUp: false,
      translatexx: "translateX(0%)",
      username: "",
      password: "",
      snackbar: false,
      snackbarText: "",
      signingIn: false,
      disbleSignInBtn: true,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 4 || "Min 4 characters",
        minPassword: v => v.length >= 6 || "Min 6 characters",
        emailMatch: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        validFullName: v => v.length >= 9 || "Invalid Name"
      },

      signingUp: false,
      newusername: "",
      fullname: "",
      gender: "",
      birthday: "",
      birthdayModal: false,
      universitiesLoading: false,
      universitiesList: [],
      searchUniversities: null,
      university: "",
      universities: [
        {
          name: "University of Benin",
          abbr: "Uniben",
          country: "Nigeria",
          state: "Edo ",
          city: "Benin",
          type: "Federal"
        },
        {
          name: "Ambrose Alli University",
          abbr: "AAU",
          country: "Nigeria",
          state: "Edo ",
          city: "Ekpoma",
          type: "State"
        },
        {
          name: "Havard University",
          abbr: "HV",
          country: "USA",
          state: "New York ",
          city: "Mathanntan",
          type: "Private"
        }
      ],

      coursesLoading: false,
      coursesList: [],
      searchCourses: null,
      course: "",
      courses: [
        {
          faculty: "Physical Sciences",
          department: "Mathematics",
          course: "Industrial Mathematics",
          year: 4
        },
        {
          faculty: "Physical Sciences",
          department: "Computer Science",
          course: "Computer Science",
          year: 4
        },
        {
          faculty: "Engineering",
          department: "Computer Engineering",
          course: "Computer Enginering",
          year: 5
        }
      ],
      level: "",
      levels: [],
      email: "",
      newpassword: "",
      show1: false,
      show2: false,
      nationality: "",
      faculty: "",
      department: "",

      errors: {
        fullname: "",
        username: "",
        gender: "",
        birthday: "",
        university: "",
        course: "",
        level: "",
        email: "",
        password: ""
      },
      containErrors: false
    };
  },

  mounted(){
     this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  methods: {
    toggleSlide(pos) {
      this.translatexx = pos;
    },
    signIn() {
      if (!this.disbleSignInBtn && !this.signingIn) this.signingIn = true;
      console.log("login in...");
      setTimeout(() => {
        this.signingIn = false;
        this.snackbarText = "Network Error";
        this.snackbar = true;
        //this.$router.replace("/home");
      }, 5000);
    },

    signUpx() {
      if (this.signingUp) {
        return;
      }
      

      this.containErrors = false;

      if (this.fullname.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.fullname = "required";
      } else if (
        !this.fullname.TEST().hasAlphabets ||
        this.fullname.TEST().hasNumber
      ) {
        this.containErrors = true;
        this.errors.fullname = "Not a valid Name";
      } else if (
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.fullname)
      ) {
        this.containErrors = true;
        this.errors.fullname = "Not a Valid Name";
      } else if (!/([A-Za-z])([ ,])([A-Za-z])/.test(this.fullname)) {
        this.containErrors = true;
        this.errors.fullname =
          "Seperate Surname and Firstname with space or comma";
      } else {
        let names = this.fullname.split(/[ ,]+/);
        if (names.length > 2) {
          this.containErrors = true;
          this.errors.fullname = "Just Surname and Firstname";
        } else this.errors.fullname = "";
      }

      if (this.newusername.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.username = "required";
      } else if (
        this.newusername.TEST().hasExcludedCharacters ||
        this.newusername.TEST().hasSpecialCharactersLast
      ) {
        this.containErrors = true;
        this.errors.username = "invalid username";
      } else if (this.newusername.TEST().hasOnlyNumber) {
        this.containErrors = true;
        this.errors.username = "can't be only digits";
      } else if (this.newusername.TEST().startsWithNumber) {
        this.containErrors = true;
        this.errors.username = "can't start with number";
      } else if (this.newusername.length <= 3) {
        this.containErrors = true;
        this.errors.username = "Nothing less than 4 characters";
      } else {
        this.errors.username = "";
      }

      if (this.gender.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.gender = "required";
      } else {
        this.errors.gender = "";
      }

      if (this.birthday.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.birthday = "required";
      } else {
        this.errors.birthday = "";
      }

      if (this.university.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.university = "required";
      } else {
        this.errors.university = "";
      }

      if (this.level == "") {
        this.containErrors = true;
        this.errors.course = "required";
      } else {
        this.errors.course = "";
      }

      if (this.email.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.email = "required";
      } else if (!this.email.TEST().isEmail) {
        this.containErrors = true;
        this.errors.email = "Invalid Email";
      } else {
        this.errors.email = "";
      }

      if (this.newpassword.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.password = "required";
      } else if (this.newpassword.length <= 5) {
        this.containErrors = true;
        this.errors.password = "Minimum of 6 Characters";
      } else if (this.newpassword.TEST().hasOnlyNumber) {
        this.containErrors = true;
        this.errors.password = "Add atleast one Alphabet";
      } else if (this.newpassword.TEST().hasOnlyAlphabets) {
        this.containErrors = true;
        this.errors.password = "Add atleast one Number";
      } else {
        this.errors.password = "";
      }

      if (this.containErrors) {
        this.snackbarText = "Error in form detail";
        this.snackbar = true;
        return;
      }

      this.signingUp = true;

      let register = {
        fullname: this.fullname,
        username: this.newusername,
        gender: this.gender,
        nationality: this.nationality,
        birthday: this.birthday,
        university: this.university,
        faculty: this.faculty,
        department: this.department,
        course: this.course,
        level: this.level,
        email: this.email,
        password: this.newpassword.toLowerCase()
      };

      console.log(JSON.stringify(register));

      setTimeout(() => {
        this.signingUp = false;
        this.snackbarText = "Network Error";
        this.snackbar = true;
        //this.$router.replace("/home");
      }, 2000);
    },

    /*****
     * @university
     * @nationality
     */
    queryUniversities(v) {
      this.universitiesLoading = true;

      // Simulated ajax query
      setTimeout(() => {
        this.universitiesList = this.universities.filter(e => {
          return (
            (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.universitiesLoading = false;
      }, 500);
    },
    queryCourses(v) {
      this.coursesLoading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.coursesList = this.courses.filter(e => {
          return (
            (e.course || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.coursesLoading = false;
      }, 500);
    }
  },

  watch: {
    username: function(val, oldVal) {
      if (this.username != "" && this.password != "") {
        this.disbleSignInBtn = false;
      } else {
        this.disbleSignInBtn = true;
      }
    },
    password: function(val, oldVal) {
      if (this.username != "" && this.password != "") {
        this.disbleSignInBtn = false;
      } else {
        this.disbleSignInBtn = true;
      }
    },

    fullname: function() {
      if (this.fullname.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.fullname = "required";
      } else if (
        !this.fullname.TEST().hasAlphabets ||
        this.fullname.TEST().hasNumber
      ) {
        this.containErrors = true;
        this.errors.fullname = "Not a valid Name";
      } else if (
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.fullname)
      ) {
        this.containErrors = true;
        this.errors.fullname = "Not a Valid Name";
      } else if (!/([A-Za-z])([ ,])([A-Za-z])/.test(this.fullname)) {
        this.containErrors = true;
        this.errors.fullname =
          "Seperate Surname and Firstname with space or comma";
      } else {
        let names = this.fullname.split(/[ ,]+/);
        if (names.length > 2) {
          this.containErrors = true;
          this.errors.fullname = "Just Surname and Firstname";
        } else this.errors.fullname = "";
      }
    },

    newusername: function() {
      if (this.newusername.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.username = "required";
      } else if (
        this.newusername.TEST().hasExcludedCharacters ||
        this.newusername.TEST().hasSpecialCharactersLast
      ) {
        this.containErrors = true;
        this.errors.username = "invalid username";
      } else if (this.newusername.TEST().hasOnlyNumber) {
        this.containErrors = true;
        this.errors.username = "can't be only digits";
      } else if (this.newusername.TEST().startsWithNumber) {
        this.containErrors = true;
        this.errors.username = "can't start with number";
      } else if (this.newusername.length <= 3) {
        this.containErrors = true;
        this.errors.username = "Nothing less than 4 characters";
      } else {
        this.errors.username = "";
      }
    },

    gender: function() {
      if (this.gender.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.gender = "required";
      } else {
        this.errors.gender = "";
      }
    },

    birthday: function() {
      if (this.birthday.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.birthday = "required";
      } else {
        this.errors.birthday = "";
      }
    },

    university: function() {
      if (this.university.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.university = "required";
      } else {
        /*****
         * @get nationality from selected school
         */
        this.errors.university = "";
        let country = this.universitiesList.filter(e => {
          return (
            (e.name || "")
              .toLowerCase()
              .indexOf((this.university || "").toLowerCase()) > -1
          );
        });
        //will be goten from the university
        this.nationality = country[0].country;
        console.log("Country " + this.nationality);
      }

      this.course = "";
      this.level = "";
    },
    course: function() {
      this.level = "";
      if (this.course.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.course = "required";
      } else {
        this.errors.course = "";
        /*****
         * @get faculty, department and years dynamically by the selected course
         */
        let moredetails = this.coursesList.filter(e => {
          return (
            (e.course || "")
              .toLowerCase()
              .indexOf((this.course || "").toLowerCase()) > -1
          );
        });

        this.faculty = moredetails[0].faculty;
        this.department = moredetails[0].department;
        console.log(
          "faculty is" + this.faculty + "department is " + this.department
        );
        this.levels = []; //empty levels
        for (var i = 0; i < moredetails[0].year; i++) {
          //populate levels with integer levels
          this.levels.push(parseInt(i + 1 + "00"));
        }
      }
    },

    level: function() {
      if (this.level == "") {
        this.containErrors = true;
        this.errors.level = "required";
      } else {
        this.errors.level = "";
      }
    },

    email: function() {
      if (this.email.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.email = "required";
      } else if (!this.email.TEST().isEmail) {
        this.containErrors = true;
        this.errors.email = "Invalid Email";
      } else {
        this.errors.email = "";
      }
    },

    newpassword: function() {
      if (this.newpassword.TEST().isEmpty) {
        this.containErrors = true;
        this.errors.password = "required";
      } else if (this.newpassword.length <= 5) {
        this.containErrors = true;
        this.errors.password = "Minimum of 6 Characters";
      } else if (this.newpassword.TEST().hasOnlyNumber) {
        this.containErrors = true;
        this.errors.password = "Add atleast one Alphabet";
      } else if (this.newpassword.TEST().hasOnlyAlphabets) {
        this.containErrors = true;
        this.errors.password = "Add atleast one Number";
      } else {
        this.containErrors = false;
        this.errors.password = "";
      }
    },

    searchUniversities(val) {
      val && val !== this.university && this.queryUniversities(val);
    },
    searchCourses(val) {
      val && val !== this.course && this.queryCourses(val);
    }
  }
};
</script>

<style lang="scss" scoped>
#register-cover {
  width: 100%;
  height: 80%;
  overflow: auto;
  padding: 0px 50px 0px 50px;
}
.background {
  background-color: #ffffff;
  background-size: fill;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-position: center;
  overflow: hidden;
}

.forgot-password {
  color: #009345;
  display: block;
  text-align: right;
  width: 100%;

  background: -webkit-linear-gradient(
    rgb(81, 82, 79),
    #1e2220,
    #1e2220,
    rgb(80, 82, 77)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#login-btn {
  background: #000000;
  color: #ffffff;
  font-size: 15px;

  padding: 7px 30px;
  border: 1px solid transparent;
  border-color: linear-gradient(to bottom right, #7fd625, #009345);
}

@keyframes aniateaccent {
  0% {
    background: linear-gradient(to bottom, #7fd625, #009345);
  }

  49% {
    background: linear-gradient(to top, #7fd625, #009345);
  }

  50% {
    background: linear-gradient(to bottom, #009345, #7fd625);
  }
}

@media screen and (min-width: 768px) and (max-width: 10000px) {
  .login-form-cover {
    width: 100%;
    height: 100%;
    margin: auto;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .login-form {
    width: 768px;
    height: 480px;
    border-radius: 10px;
    box-shadow: 0 3px 8px #100010, 0 3px 8px #100010;
    position: relative;
    padding: 0px 0px 0px 0px;
    position: relative;
    overflow: hidden;
    background: #ffffff;
  }
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    margin: 0;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #000000;
    color: #ffffff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    -ms-flex-direction: column;
    padding: 20px 20px;
    height: calc(100% - 0px);
    width: calc(50% - 0px);
    background: #000000;
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;

    animation: animateaccent 5s infinite;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }

  h2 {
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
  }

  p {
    margin: 20px 0 30px;
    padding: 10px;
  }

  #signUp,
  #signIn {
    border-radius: 20px;
    border: 1px solid #ffffff;
    font-size: 13px;
    font-weight: bold;
    padding: 5px 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 0.1s ease-in;

    &:active {
      transform: scale(0.9);
    }

    &:focus {
      outline: none;
    }
  }

  .login-container,
  .signin-container {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 0px;
    width: calc(50% - 0px);
    height: calc(100% - 0px);
    text-align: center;
    background-color: #ffffff;
    transition: all 0.5s ease-in-out;
    font-size: 1rem;
  }

  .login-container {
    left: 0;
    z-index: 3;
    padding: 90px 60px;
  }

  .signin-container {
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  .sign-up-active {
    .login-container {
      transform: translateX(100%);
      opacity: 1;
    }

    .signin-container {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show 0.5s;
    }

    .overlay-container {
      transform: translateX(-100%);
    }

    .overlay {
      transform: translateX(50%);
    }

    .overlay-left {
      transform: translateX(0);
    }

    .overlay-right {
      transform: translateX(20%);
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }

    49% {
      opacity: 0;
      z-index: 1;
    }

    50% {
      opacity: 1;
      z-index: 10;
    }
  }

  .laptop-screen .tablet-screen {
    display: block;
  }

  .mobile-screen {
    display: none;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .login-form-cover {
    height: 100%;
    width: 200%;
    transform: var(--move-login);
    transition: all 0.5s ease-in-out;
  }
  .login-form {
    width: 100%;
    height: 100%;
  }

  .login-container,
  .signin-container {
    float: left;
    height: 100%;
    width: 50%;
    top: 0;

    text-align: center;
    background-color: var(--background-color);
    transition: all 0.5s ease-in-out;
    font-size: 1rem;
  }

  .login-container {
    padding: 20% 6% 50px 6%;
  }

  // button {
  //   border-radius: 7px;
  //   outline-style: none;
  //   padding: 5px 100px;
  // }

  .dont-have-account {
    display: block;
    text-align: center;
    width: 100%;
    background: -webkit-linear-gradient(
      rgb(81, 82, 79),
      #1e2220,
      #1e2220,
      rgb(80, 82, 77)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: underline;
  }

  .login-active {
    .login-form-cover {
      transform: translateX(-50%);
    }
  }

  .sign-up-active {
    .login-form-cover {
    }
  }

  .laptop-screen .tablet-screen {
    display: none;
  }
  .mobile-screen {
    display: block;
  }
}


</style>

