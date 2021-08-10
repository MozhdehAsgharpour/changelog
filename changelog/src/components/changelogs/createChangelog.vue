<template>
   <div class="mainDiv">
    <v-container class="d-flex mainContainar" fluid>
    <v-col class="cols col-left" cols="12" sm="3" md="2">
    <v-containar class="checkBoxLists">
      <div><strong>Type</strong></div><br>
      <v-checkbox class="vChekBox"
      v-model="checkbox1"
      label="new"
      value="new"
      ></v-checkbox>
      <v-checkbox class="vChekBox"
      v-model="checkbox2"
      label="improved"
      value="improved"
      ></v-checkbox>
      <v-checkbox class="vChekBox"
      v-model="checkbox3"
      label="fixed"
      value="fixed"
      ></v-checkbox>
    </v-containar>
    <v-containar class="lblcolLeft">
    <div><strong>Lable</strong></div>
    <v-btn 
    dark
    depressed 
    color="#f8f8fa"
    small to="/createLable">
    <v-icon class="iconColLeft" color="black" small  dark>
           mdi-wrench
    </v-icon>
    </v-btn>
    </v-containar>
    </v-col>
    <v-col class="cols col-middle" cols="12" sm="4" md="5">
    <label class="lblColmid" v-if="this.EntryTitle.length > 0">{{EntryTitle}}</label><br>
    <label  class="lblColmid" v-if="this.EntryTitle.length === 0">Entry title</label><br>
    <div class="checkBoxName">
    <p class="checkbox1" v-if="checkbox1">{{checkbox1}}</p>
    <p class="checkbox2" v-if="checkbox2">{{checkbox2}}</p>
    <p class="checkbox3" v-if="checkbox3">{{checkbox3}}</p>
    </div>
    <p>{{textEditor}}</p>
    </v-col>
    <v-col class="cols col-right" cols="12" sm="5" md="5">
      <v-text-field 
      id="title"
      v-model="EntryTitle"
      color="success"
      label="Entry title"
      >
      </v-text-field>
      <markdown-editor :options="options" height="auto" v-model="textEditor"></markdown-editor>
      <v-divider></v-divider>
      <div class="btnGroup">
      <v-btn class="btnPublish"
      depressed
      color="primary" @click="getChangelogVal"
       >
       publish now
       </v-btn>
      <v-btn class="btnDatepicker"
      depressed
      color="primary"
       >
      <v-icon dark>
          mdi-calendar
      </v-icon>
      </v-btn></div>
     </v-col>
    </v-container>
  </div>
</template>
<script>
import 'v-markdown-editor/dist/v-markdown-editor.css';
  export default {
    data: () => ({
      checkbox1: null,
      checkbox2: null,
      checkbox3: null,
        alignments: [
        'start',
        'center',
        'end',
      ],
      options: {                   
          lineNumbers: true,
          styleActiveLine: true,
          styleSelectedText: true,
          lineWrapping: true,
          indentWithTabs: true,
          tabSize: 2,
          indentUnit: 2
      },
      ChanglgVal:{
        title :null,
        description:null,
        chckbxTitle:[]

      },
      textEditor:'',
      EntryTitle:'',
    }),
    methods: {
      getCheckbox(chbx){
        this['checkbox' + chbx]
      },
      getChangelogVal() {
        this.ChanglgVal.title=this.EntryTitle;
        this.ChanglgVal.description=this.textEditor;
        if(this.checkbox1 != null){
         this.ChanglgVal.chckbxTitle.push(this.checkbox1);
        }
        if(this.checkbox2 != null){
         this.ChanglgVal.chckbxTitle.push(this.checkbox2);
        }
        if(this.checkbox3 != null){
         this.ChanglgVal.chckbxTitle.push(this.checkbox3);
        }

        console.log(changlgVal);
      }
     }
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
.col-left{
border-right: 1px solid rgba(0, 0, 0, 0.096);
position: relative;
}
.lblcolLeft{
position: absolute;
display: flex;
top:40%;
left:15%;
}
.iconColLeft{
padding-left:80px;

}
.col-middle{
border-right: 1px solid rgba(0, 0, 0, 0.096);
background-color:white;
position: relative;
}
.lblColmid{
position: absolute;
top :5%;
left:5%;
}
.lblColmid{
position: absolute;
top :5%;
left:5%;
}
.col-right{
background-color:white;
}
.checkBox{
margin-top: 0;
}
.checkBoxLists{
position: absolute;
top: 5%;
left:15%;
}
.v-divider{
margin-bottom: 5%;
}
.checkBoxName{
display:flex;
}
.checkBoxName p{
padding: 0 9px;
margin-left: 10px;
}
.checkbox1{
background-color: #6dd345;
color:white;
border-radius:5px;

}
.checkbox2{
background-color: #1fa0ff;
color:white;
border-radius:5px;

}
.checkbox3{
background-color: #c17aff;
color:white;
border-radius:5px;

}
.vChekBox{
 margin-top:0;
 padding-top: 0;
 
}
.btnGroup{
display:flex;
justify-content: flex-end;
}
.btnPublish{
border-top-right-radius: 0;
border-bottom-right-radius: 0;

}
.btnDatepicker{
border-top-left-radius: 0;
border-bottom-left-radius: 0;

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