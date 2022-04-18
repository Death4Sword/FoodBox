<template>
  <section class="about">

    <div class="bds-image">
      <h1>A propos</h1>
      <img class="logobds" src="@/assets/logo-BDS.png" />
    </div>
    <div class="row p-4">
      <div class="col-6">
        <!-- <img class="float-lg-right" src="@/assets/new.jpg"> -->
      </div>
      <div class="col-12 col-sm-6">
        <h6>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          </h6>
      </div>
    </div>
    <div class="row p-4">
      <div class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12" style="margin-right: -8%; z-index:1;">
        <h6>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          </h6>
      </div>
      <div class="lastimg">
        <img class="lastimg" src="@/assets/commander.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-us img {
  margin-top: 2%;
  width: 90%;
  min-width: 380px;
}

.bds-image {
  margin-top: 2%;
  margin-left: 5%;
  width: 20%;
  height: auto;
  float: left;
  padding: auto;
}

.lastimg {
  margin-top: 2%;
  margin-left: 5%;
  width: 20%;
  height: auto;
  float: left;
  padding: auto;
}

.lastimg {
  width: 80%;
  height: 20%;
}

.logobds {
  width: 50%;
  height: 65%;
  margin: 15%;
}

</style>
