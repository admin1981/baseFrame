<template>
    <div>
        <Header style="padding: 0; position: fixed; top:0; right:0; left:200px; z-index: 9999;" class="layout-header-bar">
          <div class="div_box" style="float:right">
            <a href="javascript:;" class="a">刘德华</a>
            <a href="javascript:;" class="b"><i>10</i></a>
            <a href="javascript:;" class="c" style="border-right:0"></a>
          </div>
        </Header>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
}
</script>

<style>
  .div_box a {
    display: block;
    width: 70px;
    height: 20px;
    float: left;
    border-right:1px solid #979797;
    line-height: 20px ;
    margin-top: 15px
  }
  .div_box a.a { 
    background: url(../../../assets/img/triangle.png) no-repeat 80px 8px;
    color: #b0b0b0;
    text-align: center;
    width: 100px;
  }
  .div_box a.b { 
    background: url(../../../assets/img/icon_mail.png) no-repeat center 0px;
    position: relative
  }
  .div_box a.b i { 
    position: absolute;
    top: -10px;
    right: 10px;
    background-color: #ff4d4f;
    color: #fff;
    padding: 0 6px;
    font-size: 10px;
    font-style: normal;
    border-radius:8px 
  }
  .div_box a.c { 
    background: url(../../../assets/img/icon_question.png) no-repeat center 0px;
  }
  .layout-header-bar {
    background: #222;
    -webkit-box-shadow: 0 1px 2px 0 rgba(9,18,26,.06),0 4px 8px 0 rgba(39,56,73,.08);
    -moz-box-shadow: 0 1px 2px 0 rgba(9,18,26,.06),0 4px 8px 0 rgba(39,56,73,.08);
    box-shadow: 0 1px 2px 0 rgba(9,18,26,.06),0 4px 8px 0 rgba(39,56,73,.08);
    height:50px;
  }
</style>