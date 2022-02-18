var vietnamese = {
    button_login: "Đăng nhập",
    text_ready: "Bạn đã sẵn sàng chưa?",
    text_logout_title: "Đăng nhập ngay để xem hoạt động trực tuyến của con bạn!",
}

var english = {
    button_login: "Log in",
    text_ready: "Are you ready?",
    text_logout_title: "Log in now to view your child’s online activity!",

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
}