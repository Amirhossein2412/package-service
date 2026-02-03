// اضافه کردن قابلیت کلیک برای شماره تلفن
document.querySelectorAll('.phone-number, .cta-button').forEach(element => {
    element.addEventListener('click', function() {
        window.location.href = 'tel:09191774636';
    });
});

// انیمیشن برای آیکون‌های نقشه
const mapIcons = document.querySelectorAll('.map-icon');
mapIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});

// اسکرول نرم برای لینک‌ها
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// پیام خوش‌آمدگویی برای پیام‌رسان‌ها
document.querySelectorAll('.messenger-btn, .footer-messenger-link').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // اگر لینک معتبر است، اجازه باز شدن بده
        if(this.getAttribute('href').startsWith('http')) {
            // باز کردن در تب جدید
            window.open(this.getAttribute('href'), '_blank');
        }
    });
});

// نمایش پیام در صورت کلیک روی دکمه‌های شناور
document.querySelectorAll('.floating-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(this.getAttribute('href') === 'tel:09191774636') {
            window.location.href = 'tel:09191774636';
        } else {
            window.open(this.getAttribute('href'), '_blank');
        }
    });
});

// اضافه کردن تاریخ فارسی در فوتر
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const year = now.getFullYear();
    const persianYear = year - 621; // تبدیل به سال شمسی تقریبی
    
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement) {
        copyrightElement.innerHTML = `تمامی حقوق محفوظ است © ${persianYear} - تعمیرات تخصصی پکیج در سراسر تهران | <span class="domain-footer">package-service.ir</span>`;
    }
});