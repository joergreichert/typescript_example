module optional {
    type myType = string | number

    function add (a:number|string, b:number=0, c?:myType) {
        return +a + b;
    }
    
    add(2, 6)    
}
