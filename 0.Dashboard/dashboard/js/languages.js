var vietnamese = {
    button_login: "Đăng nhập",
    text_ready: "Bạn đã sẵn sàng chưa?",
    text_logout_title: "Đăng nhập ngay để xem hoạt động trực tuyến của con bạn!",
    text_signup_create: "Tạo tài khoản Mokinet ",
    text_free: "MIỄN PHÍ",
    text_signup_register: "Đăng ký tài khoản bây giờ và bạn sẽ được",
    text_free_3months: "miễn phí sử dụng 3 ngày tính năng cao cấp",
    text_read: "Tôi đọc, đã hiểu và đồng ý với các",
    text_signup_service: "Điều khoản dịch vụ",
    text_signup_policy: "Chính sách riêng tư",
    button_signup: "Đăng ký",
    text_and: "và",
    ph_name: "Tên",
    ph_pass: "Mật khẩu",
    ph_reemail: "Nhập lại địa chỉ email",
    text_welcomeback: "Chào mừng trở lại!",
    text_pass: "Mật khẩu",
    text_forgot: "Quên mật khẩu?",
    text_firstuse: "Lần đầu sử dụng?",

}

var english = {
    button_login: "Log in",
    text_ready: "Are you ready?",
    text_logout_title: "Log in now to view your child’s online activity!",
    text_signup_create: "Create new Mokinet account ",
    text_free: "FREE",
    text_signup_register:"Create your account and enjoy",
    text_free_3months: "3 days of Premium features, free",
    text_read: "I agree to the",
    text_signup_service: "Terms of Service",
    text_signup_policy: "Privacy Policy.",
    button_signup: "Sign up",
    text_and: "and",
    ph_name: "Name",
    ph_pass: "Password",
    ph_reemail: "Re-enter email",
    text_welcomeback: "Wellcome back!",
    text_pass: "Password",
    text_forgot: "Forgot your password?",
    text_firstuse: "First time here?",

}

var language = null;

function LoadLanguage(lang) {
    language = vietnamese; // vi
    if (lang == "en") {
        language = english; // en
    }

    RenderView();
}

function RenderView() {
    $('.multi').each(function(i, e){
        $(this).text(language[$(this).attr('data-key')]);
    }); 

    $('.multi-ph').each(function(i, e){
        $(this).attr("placeholder", language[$(this).attr('data-key')]);
    }); 

}