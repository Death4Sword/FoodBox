<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Nous contacter</div>
            <ul class="list-unstyled">
              <router-link to="/about"><li>A propos</li></router-link>
              <router-link to="/contact"><li>Conctactez-nous</li></router-link>
            </ul>
          </div>
        </div>
        <div
          class="
            col-12 col-xl-6 col-lg-3 col-md-3 col-sm-12
            text-left text-md-right
            pb-5
          "
        >
          <div class="footer-widget">
            <h4>12 Rue Anatole France ,</h4>
            <h4>92000 Nanterre, France</h4>
          </div>
        </div>
      </div>

      <div style="width: 100%">
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=12%20rue%20Anatole%20France+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ><a href="https://www.gps.ie/marine-gps/">ship tracker</a></iframe
        >
      </div>

      <div class="row justify-content-between">
        <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="tiny-footer">
            <p>Copyright © BDS Ynov Paris</p>
          </div>
        </div>
        <div class="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 text-right">
          <div class="social-info">
            <strong>Réseaux sociaux</strong>
            <img class="facebook" src="@/assets/facebook.png" />
            <img class="instagram" src="@/assets/insta.png" />
            <img class="discord" src="@/assets/discord.png" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer_area {
  position: relative;
  z-index: 1;
  color: #2c3539;
  background-color: #fefefe;
}

.footer-widget {
  padding-top: 60px;
}

.footer-title {
  padding-bottom: 20px;
  font-weight: bold;
}

.list-unstyled a {
  text-decoration: none;
}

.list-unstyled a li {
  color: #2c3e50;
  margin-bottom: 10px;
}

.social-info > img {
  padding-left: 10px;
}

.social-info > img:hover {
  opacity: 0.7;
}
</style>
