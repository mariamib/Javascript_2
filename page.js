var btn= document.querySelector(".btn");
var overlay=document.querySelector(".overlay");
btn.addEventListener('click',function()
{
    if(overlay.classList.contains('open'))
    {
        overlay.classList.remove('open');
    }
    else
    {
        overlay.classList.add('open');
    }
})
document.querySelector('i').addEventListener('click',function()
{
    overlay.classList.remove('open');

})