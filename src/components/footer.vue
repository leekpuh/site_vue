<template>
  <div class="footer">
    <p>Подпишитесь на SEI</p>
    <div class="footer_img">
      <a href="https://vk.com"><img src="../assets/vk.png"></a>
      <a href="https://instagram.com"><img src="../assets/inst.png"></a>
      <a href="https://twitter.com"><img src="../assets/twit.png"></a>
    </div>
  </div>
</template>

<style>
.footer_img {
  display: flex;
  justify-content: space-around;
  width: 100px;
  margin-left: 10px;
  position: relative;
}
.footer {
  border-top: 1px solid black;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  padding: 15px;
}
</style>