<template>
  <div>
    <h1>Edit Cars</h1>
    <h1>Edit Car</h1>
    <form v-on:submit.prevent="editCar">
      <p>category: <input type="text" v-model="car.category" /></p>
      <p>engine_capacity: <input type="text" v-model="car.engine_capacity" /></p>
      <p>model: <input type="text" v-model="car.model" /></p>
      <p>brand: <input type="text" v-model="car.brand" /></p>
      <p>color: <input type="text" v-model="car.color" /></p>
      <p>chasis_no: <input type="text" v-model="car.chasis_no" /></p>
      <p><button type="submit">edit car</button></p>
    </form>
    <hr />
    <div>
      <p>category: {{ car.category }}</p>
      <p>engine_capacity: {{ car.engine_capacity }}</p>
      <p>model: {{ car.model }}</p>
      <p>brand: {{ car.brand }}</p>
      <p>color: {{ car.color }}</p>
      <p>chasis_no: {{ car.chasis_no }}</p>
      <p><button type="submit">edit car</button></p>
    </div>
  </div>
</template>
<script>
import CarsService from "@/services/CarService";
export default {
  data() {
    return {
      car: {
        category: "",
        engine_capacity: "",
        model: "",
        brand: "",
        color: "",
        chasis_no: ""
      }
    };
  },
  methods: {
    async editCar() {
      try {
        await CarsService.put(this.car);
        this.$router.push({
          name: "cars"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let carId = this.$route.params.carId;
      this.car = (await CarsService.show(carId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
