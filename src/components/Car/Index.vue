<template>
  <div>
    <h1>Get All Car</h1>
    <div>จํานวนรถ {{ cars.length }}</div>
    <div v-for="car in cars" v-bind:key="car.id">
      <div>id: {{ car.id }}</div>
      <div>category: {{ car.category }}</div>
      <div>engine_capacity: {{ car.engine_capacity }}</div>
      <div>model: {{ car.model }}</div>
      <div>brand: {{ car.brand }}</div>
      <div>color: {{ car.color }}</div>
      <div>chasis_no: {{ car.chasis_no }}</div>
      <p>
        <button v-on:click="navigateTo('/car/' + car.id)">
          ดูข้อมูลรถ
        </button>
        <button v-on:click="navigateTo('/car/edit/' + car.id)">
          แกไขข้อมูลรถ
        </button>
        <button v-on:click="deleteCar(car)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import CarsServices from "@/services/CarService";
export default {
  data() {
    return {
      cars: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteCar(car) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await CarsServices.delete(car);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.cars = (await CarsServices.index()).data;
    }
  },
  async created() {
    this.cars = (await CarsServices.index()).data;
  }
};
</script>
<style scoped></style>
