<template>
  <div>
    <h1>Show Course</h1>
    <div>Title : {{ course.title }}</div>
    <hr>
    <div>Instructor : {{ course.instructor }}</div>
    <hr>
    <div>Description : {{ course.description }}</div>
    <hr>
    <div>Total Studen : {{ course.total_student }}</div>
    <hr>
    <div>Status Active : {{ course.status }}</div>
    <hr>
    <div>Type : {{ course.type }}</div>
    <br>
    <button v-on:click="NavigatorTo('/course/edit/'+course.id)">แก้ไขข้อมูลคอร์ส</button>
    <button v-on:click="NavigatorTo('/courses')">ย้อนกลับ</button>

  </div>
</template>
<script>
import CourseService from "@/services/CourseService";

export default {
  data() {
    return {
      course: ''
    };
  },
  methods :{
    NavigatorTo(route){
      this.$router.push(route);
    }
    
  },
  async created() {
    let courseId = this.$route.params.courseId;
    this.course = (await CourseService.show(courseId)).data
    console.log(courseId)
  }
};
</script>
<style scoped></style>
