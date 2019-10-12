// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        // Set Menu State
        showMenu = true;
       } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        // Set Menu State
        showMenu = false;
       }
}

$("form").submit(function(e) {
    
    e.preventDefault();
    
    var error = "";
    
    if ($("#name").val() == "") {
        error += "This name field is required.<br>";
    }
    if ($("#email").val() == "") {
        error += "This email field is required.<br>";
    }
    if ($("#message").val() == "") {
        error += "This message field is required.<br>";
    }
    
    if (error != "") {
        $("#error").html('<div style="color: red;"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
    } else {
        $("form").unbind('submit').submit();
    }
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    