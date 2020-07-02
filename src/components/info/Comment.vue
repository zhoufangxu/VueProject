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
                <textarea cols="30" rows="10" placeholder="分享体验新得，给万千想买的人一个参考~" maxlength="500" v-model="value.textInput"></textarea>
            </div>
        </div>
        <div class="upload">
          <el-upload
            action="http://127.0.0.1:3000/upload"
            list-type="picture-card"
            :auto-upload="false"
            :limit="9"
            :multiple="true"
            :on-change="addFile"
            ref="upload"
            >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
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
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
        <div>
            <el-button size="small" type="success" @click="upload">上传</el-button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            value: 0,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            fileList: [],
        }
    },
    methods:{
      upload(){
         this.$refs.upload.submit();
        console.log(this);
      },
      addFile(file){
        this.fileList.push(file.url);
        console.log(this.fileList)
      },
      handleRemove(file) {
        console.log(this.fileList);
        console.log(file.uid)
      },
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
</style>