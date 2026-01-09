
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// تحديث العداد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // ربط جميع أزرار "أضف إلى السلة" بالوظيفة
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة
            
            // الحصول على بيانات المنتج من الزر
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            const productImage = this.getAttribute('data-image');
            
            // إضافة المنتج إلى السلة
            addToCart(productName, productPrice, productImage);
        });
    });
});

// دالة لإضافة منتج إلى السلة
function addToCart(productName, price, image) {
    // إضافة المنتج إلى المصفوفة
    cart.push({
        name: productName,
        price: price,
        image: image
    });
    
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث العداد
    updateCartCount();
    
    // إظهار رسالة النجاح
    showToast();
}

// دالة لتحديث عداد السلة
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if(cartCount) {
        cartCount.textContent = cart.length;
    }
}

// دالة لإظهار رسالة "تمت الإضافة بنجاح" - مزخرفة
function showToast() {
    const toast = document.getElementById('toast');
    toast.innerHTML = '✨ تمت إضافة المنتج إلى السلة بنجاح! 🛒';
    toast.style.visibility = 'visible';
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0) scale(1)';
    
    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(function() {
        toast.style.visibility = 'hidden';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px) scale(0.9)';
    }, 3000);
}

// دالة لتبديل القائمة في الهاتف
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// إذا كان عندك زر Menu Toggle
const menuToggle = document.getElementById('menuToggle');
if(menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// تأثير التوهج للماوس (اختياري - للجمالية)
document.addEventListener('mousemove', function(e) {
    const cursorGlow = document.querySelector('.cursor-glow');
    if(cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});



