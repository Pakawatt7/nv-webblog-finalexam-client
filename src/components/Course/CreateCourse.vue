<template>
  <div>
    <h1>Create Course</h1>
    <form v-on:submit.prevent="createCourse">
      <p>Title: <input type="text" v-model="course.title" /></p>
      <p>Instructor: <input type="text" v-model="course.instructor" /></p>
      <p>Description: <input  type="text" v-model="course.description" /></p>
      <p>Total: <input type="number" v-model="course.total_student" /></p>
      <p>Status: <input type="text" v-model="course.status"></p>
      <p>Type: <input type="text" v-model="course.type" /></p>
      <p><button type="submit">ยืนยันสร้างคอร์ส</button> <button v-on:click="NavigatorTo('/courses')">ยกเลิก</button></p>
    </form>
    <hr />
    <div>
      <p>Title : {{ course.title }}</p>
      <p>Instructor : {{ course.instructor }}</p>
      <p>Description : {{ course.description }}</p>
      <p>Total Student : {{ course.total_student }}</p>
      <p>Status : {{ course.status }}</p>
      <p>Type : {{ course.type }}</p>
      
      <p></p>
    </div>
  </div>
</template>
<script>
import CourseService from "@/services/CourseService";

export default {
  data() {
    return {
      course: {
        title: "",
        instructor: "",
        description: "",
        total_student: 0,
        status: "",
        type: ""
      }
    };
  },
  methods: {
    async createCourse() {
      try {
        await CourseService.post(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
