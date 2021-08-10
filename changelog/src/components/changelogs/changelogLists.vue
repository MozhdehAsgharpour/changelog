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
     <v-container class="checkboxList" fluid>
     <div><strong>Status</strong></div><br>
    <v-checkbox class="vChekBox"
      label="Draft"
       value="Draft"
    ></v-checkbox>
    <v-checkbox class="vChekBox"
      label="Scheduled"
       value="Scheduled"
    ></v-checkbox>
      <v-checkbox class="vChekBox"
      label="Published"
      value="Published"
    ></v-checkbox>
  </v-container>
    <v-container fluid>
     <div><strong>Type</strong></div>
    <v-radio-group v-model="radios">
    <v-radio value="All">
        <template v-slot:label>
          <div>All</div>
        </template>
      </v-radio>
      <v-radio value="New">
        <template v-slot:label>
          <div>New</div>
        </template>
      </v-radio>
         <v-radio value="Improved">
        <template v-slot:label>
          <div>Improved</div>
        </template>
      </v-radio>
         <v-radio value="Fixed">
        <template v-slot:label>
          <div>Fixed</div>
        </template>
      </v-radio>
    </v-radio-group>
  </v-container>
         
       </v-col>
      <v-col class="cols col-right"  cols="12" sm="9" md="10">
        <v-card class="cardColRight" v-if="isShowCard"  >
        <v-card-text>
        Lorem ipsum is a placeholder text commonly used to demonstrate the 
        visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</v-card-text>
            
        </v-card>
        <v-list three-line class="changelogLists">
          <v-list-item-group >
            <template v-for="(item, index) in items">
            <v-list-item :key="item.title">
                <template v-slot:default="{ }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" class="v-list-item-title"></v-list-item-title>
                    <v-list-item-subtitle>
                    <div class="typeChangelogs">
                    <p class="newType">{{item.type[0]}}</p>
                    <p class="improveType">{{item.type[1]}} </p>
                    <p class="fixedType">{{item.type[2]}}</p>
                    </div>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="v-list-item-subtitle" v-text="item.description"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text v-text="item.editBtn"></v-list-item-action-text>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
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
      items: [
        {
          title: 'company 1  (Draft)',
          type:['NEW','IMPROVE','FIXED'],
          description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to',
          editBtn:'Edit',
       },
        {
          title: 'company 2  (Draft)',
          type:['NEW','IMPROVE','FIXED'],
          description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to',
          editBtn:'Edit',
  
        },
        {
          title: 'company 3  (Draft)',
          type:['NEW','IMPROVE','FIXED'],
          description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to ',
          editBtn:'Edit',

        },
        {
          title: 'company 4  (Draft)',
          type:['NEW','IMPROVE','FIXED'],
          description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to',
          editBtn:'Edit',

        },
        {
          title: 'company 5  (Draft)',
          type:['NEW','IMPROVE','FIXED'],
          description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to',
          editBtn:'Edit',

        },
      ],
      isShowCard:false,
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
  padding: 0 40% 0 0;
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
.typeChangelogs{
  display: flex;
  padding: 0;
  margin: 20px 0 10px -11px;
}
.typeChangelogs p{
padding: 5px;
margin-left: 10px;
margin-bottom: 0;
font-size: 0.7rem;
font-weight: bolder;
}
.newType{
background-color: #6dd345;
color:white;
border-radius:5px;
}
.improveType{
background-color: #1fa0ff;
color:white;
border-radius:5px;
}
.fixedType{
background-color: #c17aff;
color:white;
border-radius:5px;
}
.v-list-item-title{
  margin-top: 2%;
  font-weight: bold;
  font-size: 1.3rem;
}
.v-list-item{
  margin:2% 4% 4% 4%;
 }
.v-list-item-subtitle{
 margin-top: 3%;
 margin-bottom: 3.5%;
  font-size:1rem ;
}
.checkboxList{
  padding: 0;
  margin: 20% 0 0 8%;
}
.vChekBox{
 margin-top:0;
 padding-top: 0;
 
}
.changelogLists{
  max-height: 100vh;
  overflow-y: auto;
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