<template>
  <header class="header">
    <div>
      <h1><img id="logo" src="../assets/loose-format-logo.svg" alt="logo" /></h1>
      <nav>
        <ul>
          <li><a href="#">Soundcloud</a></li>
          <li><a href="mail:info@looseformat.com">Email</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="less">
  @import "../less/variables.less";

  #logo {
    display: block;
    width: 78.57%;
  }

  .header {
    margin-top: @off;    
    margin-left: @off;
    margin-right: @off;

    h1 {
      display: block;
    }
  }
</style>