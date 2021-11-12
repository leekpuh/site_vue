<template>
  <div id="main">
    <Navbar/>
    <div class="content">
      <div class="main-pics">
        <img src="../assets/main-1.png">
        <img src="../assets/main-2.png">
        <img src="../assets/main-3.png">
      </div>
      <div class="rect-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
    <vFooter/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import vFooter from '../components/footer';
export default {
  name: 'Main',
  components: {
    Navbar,
    vFooter
  }
}
</script>

<style>
.content {
  background: rgba(0,0,0,0.9);
  height: 697px;

}
.content {
  display: flex;
  justify-content: center;
}
.main-pics {
  display: flex;
  flex-direction: row;
}
.main-pics img{
  padding: 40px 20px;
}
.rect-text {
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 200px;
  position: absolute;
  margin: 230px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rect-text p {
  color: white;
  width: 400px;
}

</style>