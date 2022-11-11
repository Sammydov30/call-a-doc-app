<template>
  <section>
    <div class="">
      <div class="container no-p-m">
        <div class="row no-p-m">
            <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>

  </script>

<style scoped>
@media (min-width: 1200px){
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 100%;
  }
  .no-p-m{
    margin: 0;
    padding: 0;
  }
}
</style>