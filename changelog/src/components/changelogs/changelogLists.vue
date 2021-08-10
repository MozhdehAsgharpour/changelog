<template>
  <div class="mainDiv">
    <v-container class="d-flex mainContainar" fluid>
    <!--  <v-row  no-gutters  style="height: 150px;" >
        <v-col cols="12" sm="3" md="2" >
        <v-btn block>
         Block Button
         </v-btn>
       </v-col >
        <v-col cols="12" sm="3" md="3" >
        <v-card class=""  >
            second column
          </v-card>
        </v-col>
       </v-row> -->
       <v-col class="cols col-left"  cols="12" sm="3" md="2">
        <!-- <v-btn class="btnColRight" block @click="goTo('/createChangelog')">
         Create a new changelog
         </v-btn> -->
         <v-btn class="btnColRight" block to="/createChangelog" >
         Create a new changelog
         </v-btn>
         
       </v-col>
      <v-col class="cols col-right"  cols="12" sm="9" md="10">
      <v-card class="cardColRight"  >
      <v-card-text>
       In publishing and graphic design, 
       Lorem ipsum is a placeholder text commonly used to demonstrate the 
       visual form of a document or a typeface without relying on meaningful content. 
       Lorem ipsum may be used as a placeholder before final copy is available.</v-card-text>
           
      </v-card>
      </v-col>
    </v-container>
</div>
</template>
<script>
  export default {
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>
<style scoped>
.mainDiv{
  height: 100%;
  }
.mainContainar{
  margin: 0;
  padding: 0;
}
.cols{
height:100vh;
background-color:#f8f8fa;

}
.cardColRight{
width:50%;
margin: 3%;
border-radius: 2px;
text-align: center;
}
.col-right{

}
.col-left{
border-right: 1px solid rgba(0, 0, 0, 0.096);
position: relative;
}
.btnColRight{
position: absolute;
border-radius: 0;
box-shadow: none;
margin-top: -12px;
margin-left: -11px;
border-right: 1px solid rgba(0, 0, 0, 0.096);
border-bottom: 1px solid rgba(0, 0, 0, 0.096);
background-color:#f8f8fa !important;
}
@media screen and (min-width: 601px) {
  .btnColRight {
    font-size: 0.9vw !important;
  }
}
@media screen and (max-width: 600px) {
  .btnColRight {
    font-size: 2.5vw !important;
  }
}

</style>