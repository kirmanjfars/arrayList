class ArrayList{
    constructor(){
        this.ar = [];
    }

    push(element){
        this.ar[this.ar.length] = element
        return this.ar;
    }

    pop(){
       this.ar =  this.ar.slice( 0, this.ar.length-1);
       return this.ar;
    }

    unshift(element){
        let temp= [];
        temp.push(element);
        this.ar = temp.concat(this.ar);
        return this.ar;
    }

    shift(){
        this.ar = this.ar.slice(1, this.length );
        return  this.ar;
    }

    clear(){
        this.ar = [];
        return this.ar;
    }

    

    concat(newAr){
            
        for(let i=0; i<newAr.length;i++){
            this.ar[this.ar.length] = newAr[i];
        }
        return this.ar;
    }

    map(func){
      
        let temp = [];
        this.ar.forEach(element => {
           temp.push(func(element));
           
        });
        this.ar = temp;
        console.log(this.ar);
    }    
}

let ob = new ArrayList();
ob.push(2);
ob.push(3);
ob.push(4);
ob.push(5);
ob.pop();
ob.unshift(2);
ob.shift();
ob.concat(['hi', 'some',4]);
ob.map((e) => e +3);

