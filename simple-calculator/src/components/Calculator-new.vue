<template> 
  <div class="calculator">
    <div  class="display">{{ current || '0'}}</div>
    <div type="button" class="btn" @click="clear">C</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn" @click="percent">%</div>
    <div @click="divide" class="btn operator">/</div>
    <div @click="appendNumber('7')" class="btn">7</div>
    <div @click="appendNumber('8')" class="btn">8</div>
    <div @click="appendNumber('9')" class="btn">9</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="appendNumber('4')" class="btn">4</div>
    <div @click="appendNumber('5')" class="btn">5</div>
    <div @click="appendNumber('6')" class="btn">6</div>
    <div @click="multiply" class="btn operator">x</div>
    <div @click="appendNumber('1')" class="btn">1</div>
    <div @click="appendNumber('2')" class="btn">2</div>
    <div @click="appendNumber('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="appendNumber('0')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="eval" class="btn">=</div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      previous: null,
      current: '',
      operator: null,
      clickedoperator: false,
  }
},
methods: {
  clear(){
    this.current = '';
  },
  sign(){
    this.current = this.current.charAt(0) === '-' ?
    this.current.slice(1) : `-${this.current}`;
  },
  percent(){
    this.percent = `${parseFloat(this.current) / 100}`;
  }, 
  append(number){
    this.current = `${this.current}${number}`
  }, 
  dot(){
    if(this.current.indexOf('.') === -1){
    this.append('.');
    }
  },
  appendNumber(number){
    if(this.clickedoperator){
      this.current = '';
      this.clickedoperator = false;
    }
    this.current = `${this.current}${number}`

  },
  setPrevious(){
      this.previous = this.current;
      this.clickedoperator = true;
  },
  divide(){
      this.operator = ( a,b) => a/ b;
      this.setPrevious();
  },
  multiply(){
    this.operator = (a, b) => a * b;
    this.setPrevious();
  },
  add(){
    this.operator = (a, b) => a + b;
    this.setPrevious();
  },
  minus(){
    this.operator = (a , b) => a - b;
    this.setPrevious();
  },
  eval(){
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`
  }
}
}
</script>

<style scoped>
 .calculator{
  width: 400px;
  margin: 0 auto;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  cursor: pointer;
 }
 .display{
  grid-column: 1/5;
  color: white;
  display: flex;
  align-items: flex-end;
  background-color: rgb(52, 45, 45);
 }

 .zero{
  grid-column: 1/3;
 }

 .btn{
  background-color: #eee;
  border: 1px solid #333;
 }

 .operator{
  background-color: orange;
 }
</style>