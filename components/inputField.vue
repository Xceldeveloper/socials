<template>
  <div>
    <div class="input-field">
      <at-ta at="#" :members="hashtags">
        <at-ta at="@" :members="members" name-key="username">
          <template slot="item" slot-scope="s">
            <img :src="s.item.avatar" />
            <span v-text="s.item.username"></span>
          </template>
          <textarea
          
            v-model="hello"
          ></textarea>
        </at-ta>
      </at-ta>
      <label :for="placeholder" class="label-name">
        <span class="content-name">{{placeholder}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AtTa: () =>
      process.client
        ? import("vue-at/dist/vue-at-textarea")
        : Promise.resolve({ render: h => h("div") })
  },

  inheritAttrs: false,
  props: {
    value: { default: "" },
    type: { default: "text" },
    placeholder: { default: "" },
    // hashtags: { default: [] },
    // mentions: { default: [] }
  },
  data() {
    return {
        hello:"",
     hashtags:["XcelMusic","Covid19"],
    members:[
        {
          avatar:require("~/static/drake.jpg"),
          username:'ovmobile'
        },
         {
          avatar:require("~/static/drake.jpg"),
          username:'Shalom'
        },
          {
          avatar:require("~/static/drake.jpg"),
          username:'ovmobile'
        },
         {
          avatar:require("~/static/drake.jpg"),
          username:'Shalom'
        }
      ],
    };
  },
  methods: {},
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, this.listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        },
        focus: function() {}
      });
    }
  }
};
</script>

<style scoped lang="scss">
#app .atwho-li {
  padding: 0px;
  display: block;
  height: 70px;
}
#app .atwho-li img {
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border-radius: 50%;
}
#app .atwho-li span {
  color: var(--text-color);
}

.input-field {
  width: 100%;
  height: 62px;
  position: relative;
  overflow: hidden;
  background-color: trarnsparent;
}

.input-field input {
  width: 100%;
  height: 100%;
  padding: 0px;
  padding-top: 20px;
  font-size: 20px;
  color: var(--text-color);
  outline-style: none;
  background-color: trarnsparent;
}

.input-field label {
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
  color: var(--text-color);
  border-bottom: 1px solid var(--text-color);
}

.input-field label::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -1px;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid var(--text-color);
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.content-name {
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: all 0.3s ease;
}

.input-field input:focus + .label-name .content-name,
.input-field input:valid + .label-name .content-name {
  transform: translateY(-150%);
  font-size: 14px;
  color: var(--subtext-color);
}

.input-field input:focus + .label-name::after,
.input-field input:valid + .label-name::after {
  transform: translateX(0%);
}

.input-field::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--text-color);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--text-color);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--text-color);
}
</style>

