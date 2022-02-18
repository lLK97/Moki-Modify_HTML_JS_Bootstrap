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
    text_confirmacc: "Tài khoản của bạn đã được xác thực",
    text_confirmsub: "Bây giờ bạn đã có thể bắt đầu giám sát các hoạt động của con bạn!",
    text_clickhere: "Truy cập tại đây",
    text_recovery_reset: "Khôi phục mật khẩu",
    text_recovery_sub: "Vui lòng nhập địa chỉ email đã sử dụng để đăng ký tài khoản Mokinet của bạn",
    button_recoverypass: "Khôi phục mật khẩu",
    text_recovery_code: "Nhập mã số:",
    ph_rec_email: "Địa chỉ email",
    text_have_email: "Bạn có thư!",
    text_if: "Nếu",
    text_have_sub: "được liên kết với tài khoản Mokinet, bạn sẽ nhận được email có link đặt lại mật khẩu",
    text_newpass: "Nhập lại mật khẩu",
    text_recreset_sub: "Vui lòng nhập mật khẩu Mokinet mới của bạn:",
    ph_repass: "Nhập lại mật khẩu",
    button_setup: "Thiết lập",
    text_resetsuccess: "Khôi phục mật khẩu thành công!",
    text_success_relogin: "Vui lòng đăng nhập lại với mật khẩu mới.",
    button_relogin: "Đăng nhập với Mokinet",

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
    text_confirmacc: "Your account was confirmed",
    text_confirmsub: "Now you're ready to start monitoring your kid's activity!",
    text_clickhere: "Visit here",
    text_recovery_reset: "Recovery your password",
    text_recovery_sub: "Please enter your email",
    button_recoverypass: "Recovery your password",
    text_recovery_code: "Enter code:",
    ph_rec_email: "Email address",
    text_have_email: "You had new Email!",
    text_if: "When",
    text_have_sub: "is connected with Mokinet account, you will receive a email with a link in order to reset your password",
    text_newpass:"Reset your password",
    text_recreset_sub: "Please enter new password for your Mokinet :",
    ph_repass: "Re-enter password",
    button_setup: "Reset",
    text_resetsuccess: "Your password is reset successfully!",
    text_success_relogin: "Please log in again with new password.",
    button_relogin: "Login Mokinet",


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