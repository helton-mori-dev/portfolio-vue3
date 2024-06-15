<template>
  <div class="contato">
    <ul>
      <li class="linkedin">
        Linkedin
        <a
          target="_blank"
          class="linkedin"
          href="https://www.linkedin.com/in/engheltonmori/"
        >
          <i class="icon-linkedin"></i>
        </a>
      </li>
      <li class="github">
        Github
        <a target="_blank" class="" href="https://github.com/helton-mori-dev">
          <i class="icon-github-circled"></i>
        </a>
      </li>
      <li class="email">
        Email
        <a target="_blank" class="" href="mailto:heltonmori@gmail.com">
          <i class="icon-gmail"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LateralContact",
};
</script>

<style scoped>
.contato {
  position: fixed;
  left: 0;
  top: 0;
  width: 50px;
  background-color: transparent;
  z-index: 100;
  height: 100%;

  ul {
    list-style: none;
    position: absolute;
    left: 0;
    top: 40%;
    padding-left: 30px;

    li {
      font-size: 0;
      float: left;
      margin-bottom: 12px;

      a {
        font-size: 24px;
        transition: 0.3s all ease;
      }

      &.linkedin:hover a {
        color: #0e76a8;
      }

      &.email:hover a {
        color: #f00;
      }

      &.github:hover a {
        color: #333;
      }
    }
  }
}
</style>
