<template>
<div class="mainDiv">
<v-container class="d-flex mainContainar" fluid >
<v-col class="cols col-left"  cols="12" sm="3" md="2">
</v-col>
<v-col v-col class="cols col-right"  cols="12" sm="9" md="10">
  <v-row>
    <p class="title">Changelog Settings</p>
  </v-row>
  <v-divider></v-divider>
  <v-row>
    <v-col class="btnMidCol" cols="12" sm="3" md="2">
      <v-btn 
      depressed
      color="white"
      to="">
      Labels
     </v-btn>
     <v-btn 
     depressed
     color="white" 
     to="">
     Privacy
    </v-btn>  
   </v-col>
   <v-col>

  <v-card :elevation="0"  >
  <v-card-title>
  <p class="titleSample"> Labels look like this: <span class="lblSample">LABEL NAME</span></p>
  </v-card-title>
  <v-card-text >
  You can add labels to changelog entries to specify which part of your product is being changed. Labels are public-facing, and can be used to filter down the list view.
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>
  <v-text-field
    label="Lable"
    single-line
  ></v-text-field>
  </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
</v-col>
</v-container>
</div>
</template>
<script>
export default {
  
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
.title{
  margin: 3% 4%;
  font-size:1.6rem !important;
}
.btnMidCol{
  display: flex;
  flex-direction: column;
}
.v-btn{
  margin-top: 30%;
}
.col-right{
  background-color: white;
}
.col-left{
border-right: 1px solid rgba(0, 0, 0, 0.096);
position: relative;
}
.lblSample{
  color:white ;
  background-color:#bdbdbd;
  padding:5px;
  border-radius:5px;
  font-size: 0.8rem;
}
.titleSample{
  margin-top: 10px;
}

</style>