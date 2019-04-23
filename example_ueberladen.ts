/* geht nicht, da kein klassisches Überladen
function xxx (a:number|string, b:number) {
    return handleType(a) + b;
}

function handleType (a:number) {
    return 1;
}

function handleType (a:string) {
    return 1;
}
*/

module ueberladen {
    function xxx (a:number|string, b:number):number

    function xxx (a:any, b:number) {
        return handleType(a) + b;
    }
    
    function handleType (a:any) {
        return 1;
    }
    
    xxx(2, 6)    
}

