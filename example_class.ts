module classexample {    
    class X {
        public a = 1
        private x = 123
        protected y : string | null
        bool = false

        constructor(params : { a?:number, x?:number, y?:string, bool?:boolean}) {
            const { a, x, y, bool} = params
            this.a = a || this.a
            this.x = x || this.x
            this.y = y || null
            this.bool = bool || false
        }

        /* geht nicht
        constructor(params : X) {
            const { this.a, this.x, this.y, this.bool} = params
        }
        */

        public initX(): void {
            this.a = 3
        }

        static myStatic() {
            return "myStatic" 
        }
    }

    const x = new X({a: 5, y: "6"})
    x.bool = true
    // doesn't compile as private
    // x.x = 6

    // Typen nachinstallieren
    // npm install --save-dev @types/node

    // npm init
    // package.json "tsc": "tsc"
    // npm install -D typescript
    // "outDir": "./dist" in tsconfig.json
    // npm run tsc -- --init
}
