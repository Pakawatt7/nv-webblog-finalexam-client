<template>
  <div>
    <h1>Show Car</h1>
    <p>category: {{ car.category }}</p>
    <p>engine_capacity: {{ car.engine_capacity }}</p>
    <p>model: {{ car.model }}</p>
    <p>brand: {{ car.brand }}</p>
    <p>color: {{ car.color }}</p>
    <p>chasis_no: {{ car.chasis_no }}</p>
  </div>
</template>
<script>
import CarsService from "@/services/CarService";

export default {
  data() {
    return {
      car: null
    };
  },
  async created() {
    let carId = this.$route.params.carId;
    this.car = (await CarsService.show(carId)).data
    console.log(this.carId)
  }
};
</script>
<style scoped></style>
