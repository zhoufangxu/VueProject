<template>
    <div>
        <div class="rate">
            <span class="title">商品评分</span>
            <div>
                <el-rate v-model="value" :colors="colors" show-score text-color="#f00"></el-rate>
            </div>
        </div>
        <div class="comment">
            <span class="title">商品评价</span>
            <div>
                <textarea cols="30" rows="10" placeholder="分享体验新得，给万千想买的人一个参考~" maxlength="500" v-model="textInput"></textarea>
            </div>
        </div>
        <div class="upload">
          <el-upload
            action="http://127.0.0.1:3000/upload"
            list-type="picture-card"
            :auto-upload="false"
            :limit="9"
            :multiple="true"
            ref="upload"
            :on-success="afterUpload"
            name="file"
            >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                >
                <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                    >
                    <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                    >
                    <i class="el-icon-delete"></i>
                    </span>
                </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl">
            </el-dialog>
        </div>
        <div class="upload-btn">
            <button @click="upload">上传</button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            value: 0,
            textInput: '',
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
        }
    },
    methods:{
      // 文件上传成功钩子函数
      afterUpload(response, file, fileList){
          if(response.code == 1){
            this.$alert('发表成功', '提示', {
            confirmButtonText: '确定',
            });
          }
          fileList.length = 0;
      },
      //文件上传
      upload(){
         this.$refs.upload.submit();
      },
      //删除文件
      handleRemove(file) {
        console.log(file);
      },
      //文件预览
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    }
}
</script>


<style scoped>
 .rate{
     display: flex;
     margin: 20px 0;
 }
 .title{
     width: 200px;
     padding-left: 10px;
     color: #747474;
     font-size: 14px;
     text-align: center;
 }
 .comment{
     display: flex;
 }
 .comment>div{
    width: 600px;
 }
 .comment>div>textarea{
     width: 100%;
     height: 120px;
     outline: none;
     border: 1px solid #e1e1e1;
 }
 .upload{
     margin-left: 210px;
 }
 .el-upload--picture-card{
     width: 80px;
     height: 80px;
 }
 .upload-btn{
     margin: 20px 0;
     text-align: center;
 }
 .upload-btn>button{
     background: #f00;
     outline: none;
     border: none;
     color: #fff;
     width: 160px;
     height: 40px;
     border-radius: 5px;
     cursor: pointer;
 }
 .upload-btn>button:hover{
     opacity: 0.9;
 }
</style>