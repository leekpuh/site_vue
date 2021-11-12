<template>
  <div class='v-select'>

    <div class="options">
      <b-button
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    },
  },
}
</script>

<style>
.v-select {
  position: relative;
  width: 180px;
  cursor: pointer;
  text-align: left;
}

.v-select button {
  display: flex;
  margin: 5px 20px;
  font-size: 16pt;
  background-color: black;

}
.options {
  top: 30px;
  left: 0;
  width: 100%;
}
.options p:hover {
  background: #e7e7e7;
}
</style>