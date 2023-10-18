<template>
  <div>
    <h1>Edit Course</h1>
    <form v-on:submit.prevent="editCourse">
      <p>Title: <input type="text" v-model="course.title" /></p>
      <p>Instructor: <input type="text" v-model="course.instructor" /></p>
      <p>Description: <textarea id="inputDes" type="text" v-model="course.description" /></p>
      <p>Total: <input type="number" v-model="course.total_student" /></p>
      <p>Status: <input type="text" v-model="course.status"></p>
      <p>Type: <input type="text" v-model="course.type" /></p>
      <p><button type="submit" v-on:click="editCourse()">ยืนยันแก้ไขข้อมูล</button> <button v-on:click="NavigatorTo('/courses')">ย้อนกลับ</button></p>
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
    async editCourse() {
      try {
        await CourseService.put(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    },
    NavigatorTo(route){
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseId;
      this.course = (await CourseService.show(courseId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped>
.inputDex{
  widows: 100px;
  height: 100px;
}
</style>
