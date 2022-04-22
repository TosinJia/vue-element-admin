<template>
  <div class="app-container">
    <aside style="margin-top:15px;">
      自增qiniu功能界面，验证 Upload 上传 qiniu.
    </aside>
    <qiniu-upload />
  </div>
</template>

<script>
import QiniuUpload from '@/views/qiniu/upload.vue'

export default {
  components: { QiniuUpload }
}
</script>
