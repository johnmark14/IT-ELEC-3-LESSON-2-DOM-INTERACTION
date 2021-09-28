const Counter = {
    data() {
      return {
        heading: "This is a Heading",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, facilis quisquam? Quos dolorem delectus cum at, ducimus tenetur est fugit recusandae quam quaerat temporibus quo repellat fugiat commodi necessitatibus ipsa!"
      }
    },
    methods: {
      displayConsole() {
        console.log(this.heading)
      }
    },
    computed() {
      console.log("test")
    }
  }
Vue.createApp(Counter).mount('#user-goal')