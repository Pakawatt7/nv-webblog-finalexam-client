<template>
  <div>
    <h1>Get All Course</h1>
    <div><h1>จํานวนคอร์ส {{ courses.length }}</h1></div>
    <button v-on:click="NavigatorTo({name : 'course-create'})">เพิ่มคอร์ส</button>
    <br>
    <div v-for="course in courses" v-bind:key="course.id">
      <div>Id: {{ course.id }}</div>
      <div>Title : {{ course.title }}</div>
      <div>Instructor : {{ course.instructor }}</div>
      
      <p>
        <button v-on:click="NavigatorTo('/course/' + course.id)">
          ดูข้อมูลคอร์ส
        </button>
        <button v-on:click="NavigatorTo('/course/edit/' + course.id)">
          แก้ไขข้อมูลคอร์ส
        </button>
        <button v-on:click="deleteCourse(course)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import CourseServices from "@/services/CourseService";
export default {
  data() {
    return {
      courses: []
    };
  },
  methods: {
    NavigatorTo(route){
      this.$router.push(route);
    },
    async deleteCourse(course) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await CourseServices.delete(course);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.courses = (await CourseServices.index()).data;
    }
  },
  async created() {
    this.courses = (await CourseServices.index()).data;
  }
};
</script>
<style scoped></style>
