class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length

  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if(pos>this.length-1)
    {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
if(this.length===0){
  throw new Error("EmptySortedList");
}
return Math.max(...this.items)
  }

  min() {
    if(this.length===0){
  throw new Error("EmptySortedList");
}
return Math.min(...this.items)
  }

  sum() {
    let sum=0
    this.items.forEach(item=>{
      sum+=item
    })
    return sum
  }

  avg() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    }
    let sum= this.sum()
    let avg=sum/this.length
    return avg
  }
}

module.exports = SortedList;
