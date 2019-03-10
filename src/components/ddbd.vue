<template>
  <div class="hello">
   

<el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
<h3>{{$store.state.count}}</h3>
<foolter></foolter>
<div>
    <button @click="$store.commit('add',5)">+</button>
    <button @click="$store.commit('reduce',1)">-</button>
     <button @click="$store.dispatch('reduce',3)">-</button>
</div>
  
  <el-dialog title="Dialog" :visible.sync="outerVisible"  width="80%">

      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="邮箱"
   
  >
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
  <el-form-item
    prop="qq"
    label="QQ"
   
  >
    <el-input v-model="dynamicValidateForm.qq"></el-input>
  </el-form-item>
  <el-form-item
    prop="tel"
    label="电话"
   
  >
    <el-input v-model="dynamicValidateForm.tel"></el-input>
  </el-form-item>
  
  

 <el-dialog
      width="60%"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body>

<el-row :gutter="20"  v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key">
    <div>
  <el-col :span="6" >
    

    
    <div>
        <el-form-item
    
    label='姓名'
    
    :prop="'domains.' + index + '.name'"
   
  >
    <el-input v-model="domain.name"></el-input>
  </el-form-item>
    
    </div>
    </el-col>
  <el-col :span="6">
    <div >
        <el-form-item
    
    label='年龄'
    :key="domain.key"
    :prop="'domains.' + index + '.age'"
    
  >
    <el-input v-model="domain.age"></el-input>
  </el-form-item>
      </div>
    </el-col>
  <el-col :span="6">
    <div >
        <el-form-item
   
    label="性别"
    :key="domain.key"
    :prop="'domains.' + index + '.six'"
    
  >
    <el-input v-model="domain.six"></el-input>
  </el-form-item>
      </div>
    </el-col>
    <el-col :span="6"><div>
      <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </div></el-col>
  </div>
</el-row>
<el-form-item>
    
    <el-button @click="addDomain">新增域名</el-button>
   
  </el-form-item>

    </el-dialog>




  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
    <el-button @click="addDomain">新增域名</el-button>
    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  </el-form-item>
</el-form>

   
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
    </div>
  </el-dialog>

  </div>
</template>




<script>
import foolter from '@/components/foolter';
export default {
  name: "ddbd",
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            name: "",
            age: "",
            six: ""
          }
        ],
        email: "",
        qq: "",
        tel: ""
      },
      outerVisible: false,
      innerVisible: false
    };
  },
  methods: {
    submitForm(formName) {
      console.log(JSON.stringify(this.dynamicValidateForm));
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        name: "",
        age: "",
        six: "",
        key: Date.now()
      });
    }
  },
  computed:{
   
    count(){
        return this.$store.getters.count;
    }
},
components:{
  foolter
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
