var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas')
abc = canvas.getContext ("2d");


color = "black";
width_of_line = 1; 

screen_width=screen.width; 
new_width=screen_width-70
new_height=screen.height-300


if (screen.width < 992)

{
canvas.width = new_width
canvas.height = new_height

document.body.style.overflow="hidden"

}

canvas.addEventListener("touchstart" , my_touchstart)
function my_touchstart(e)

{
    console.log("my_touchstart");

    color = document.getElementById("color").value
    width_of_line=document.getElementById("width").value

console.log("color=" + color)
console.log("width=" + width)

last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
last_position_of_y=e.touches[0].clientY-canvas.offsetTop


}



canvas.addEventListener("touchmove" , draw_when_touch);
function draw_when_touch(e)

{
    console.log("draw_when_touch"); 
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    abc.beginPath();
    abc.strokeStyle = color; 
    abc.lineWidth = width_of_line; 

    abc.moveTo(last_position_of_x , last_position_of_x)
    abc.lineTo(current_position_of_touch_x , current_position_of_touch_y)
    abc.stroke(); 

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y; 
}



canvas.addEventListener("mousedown" , my_mousedown); 
function my_mousedown(e)

{

    color=document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener ("mouseup", my_mouseup);
function my_mouseup (e)
{
    mouseEvent = "mouseUP"; 
    console.log(mouseEvent);
}

canvas.addEventListener ("mouseleave", my_mouseleave);
function my_mouseleave (e)
{
    mouseEvent = "mouseleave"; 
    console.log(mouseEvent);
}

canvas.addEventListener ("mousemove", my_mousemove);
function my_mousemove (e)
 
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
current_position_of_mouse_y = e.clientY - canvas.offsetTop; 

if (mouseEvent == "mouseDown") { 

    abc.beginPath(); 
    abc.strokeStyle = color; 
    abc.lineWidth = width_of_line;
    abc.moveTo(last_position_of_x, last_position_of_y); 
    abc.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
    abc.stroke();

    console.log(last_position_of_x + "--" + last_position_of_y); 
    console.log (current_position_of_mouse_x + "$$" +current_position_of_mouse_y)
} 

last_position_of_x = current_position_of_mouse_x; 
last_position_of_y = current_position_of_mouse_y; 
    

}

function cleararea ()

{
    abc.clearRect(0,0,abc.canvas.width,abc.canvas.height);

}
 

