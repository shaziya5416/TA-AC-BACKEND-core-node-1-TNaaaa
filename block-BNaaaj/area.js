function square(side){
    return side*side;
}

function rectangle(length,breadth){
    return length*breadth;
}

function circle(radius){
    const pie=3.14;
    return pie*radius*radius;
}

module.exports=
{
  square:square,

  rectangle:rectangle,

  circle:circle,

}