<template>
    <div>
        <el-card class="box-card">
            <div class="text item"> 客服机器人: {{this.response}}</div>
        </el-card>


    </div>
    <el-input
            v-model="msg"
            :rows="2"
            type="msg"
            placeholder="请输入咨询内容"
    />
    <el-button type="success" plain @click="sendMessage()">提交</el-button>
</template>

<script>
    import {ref} from "@vue/reactivity";
    import {ElMessage} from "element-plus";

    export default {
        name: "ServiceCenter",
        data() {
            return {
                tableData: null,
                response:null,
                msg:""
            }
        },
        methods:{
          sendMessage(){
              this.axios.get("http://api.qingyunke.com/api.php",  {
                  params:{
                      key: "free",
                      msg: this.msg,
                  },
              })
                  .then(response => {
                      this.response = response.data.content
                  })
                  .catch(function (error) {
                      console.log(error);
                  });

          },
        },
        setup() {

            return {
                textarea: ref(''),
            }
        },
    }
</script>

<style scoped>

</style>