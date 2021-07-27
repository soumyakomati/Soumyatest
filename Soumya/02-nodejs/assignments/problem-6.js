/*6. Create a module to calculate areas of various shapes.
 - Square (public function) - makes use of Rectangle function to calculate area
 - Rectangle (private function)
 - Circle (public function)
 - PI (private variable)
 Make use of this module in another module (i.e. file)
*/

function circle(radius)
{
    const pi = Math.PI;
    this.radius = radius;
    this.area = function () 
    {
        return pi * this.radius * this.radius;
    };
}
const c = new circle(3);
console.log('Area =', c.area().toFixed(2));



function square (length,breadth){
    
    this.length = length;
    this.breadth = breadth;
    
    function rectangle(length,breadth)
    {        
            return this.length * this.breadth;
    }
    this.areaOfRec =rectangle();
    return this.areaOfRec;
}


console.log('square area is '+square(3,3));

module.exports = {
    square,circle
};

