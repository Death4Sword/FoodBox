<template>
  <section class="homepage">
    <body>
    
      <img class ="cavamarcher" src="@/assets/Logo-foodbox.png">
        <div class="wiwitheboss">
          <div class="p-2">Nos Boxs</div>
          <div class="p-2">Cuisinez et<br>dégustez</div>
          <div class="p-2">Méthode de<br>paiement</div>
          <div class="p-2">Livraison au<br>campus</div>
        </div>
    
    </body>
  </section>
</template>


<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
body {
  background-color: rgba(96, 96, 96, 90);
  width: auto;
  height: auto;
} 

.cavamarcher{
  display: block;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
}
.wiwitheboss{
  margin-left: 20%;
  color: rgb(203, 203, 203);
  display: flex;
  text-align: center;
  font-size: 185%;
}
.p-2{
  display: inline;
  margin : 5%;
  font-family: 'Raleway';
}

.col-md-4 {
  display: flex;
}

.about-us img {
  width: 90%;
  min-width: 380px;
}
</style>
